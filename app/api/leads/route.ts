import { NextResponse } from 'next/server';
import { z } from 'zod';
import { assertSanityConfigured } from '@/lib/sanity/env';
import { getSanityWriteClient } from '@/lib/sanity/writeClient';

const leadBodySchema = z.object({
  name: z.string().trim().min(1).max(256),
  email: z.string().trim().email().max(256),
  phone: z.string().trim().max(64).optional().default(''),
  message: z.string().trim().max(5000).optional().default(''),
  formTitle: z.string().trim().max(256).optional().default(''),
  pageUrl: z.string().trim().max(2048).optional().default(''),
  utmSource: z.string().trim().max(256).optional().default(''),
  utmMedium: z.string().trim().max(256).optional().default(''),
  utmCampaign: z.string().trim().max(256).optional().default(''),
  utmContent: z.string().trim().max(256).optional().default(''),
  utmUrl: z.string().trim().max(2048).optional().default(''),
});

export async function POST(request: Request) {
  try {
    assertSanityConfigured();
    const json: unknown = await request.json();
    const parsed = leadBodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const data = parsed.data;
    const client = getSanityWriteClient();
    const doc = await client.create({
      _type: 'lead',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      formTitle: data.formTitle,
      pageUrl: data.pageUrl || undefined,
      utmSource: data.utmSource,
      utmMedium: data.utmMedium,
      utmCampaign: data.utmCampaign,
      utmContent: data.utmContent,
      utmUrl: data.utmUrl,
      status: 'new',
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ id: doc._id }, { status: 201 });
  } catch (err) {
    console.error('[api/leads]', err);
    const message = err instanceof Error ? err.message : 'Server error';
    const status = message.includes('Missing') ? 503 : 500;
    return NextResponse.json({ error: 'Could not save your request. Please try again or email us directly.' }, { status });
  }
}

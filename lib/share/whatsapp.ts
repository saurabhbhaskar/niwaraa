import { CONTACT_PHONE_E164, SITE_NAME } from '@/lib/site';

export type ShareContent = {
  title: string;
  description: string;
  url: string;
};

export function buildShareMessage({ title, description, url }: ShareContent): string {
  const lines = [
    title,
    description,
    '',
    url,
    '',
    `— ${SITE_NAME}`,
  ];
  return lines.join('\n').trim();
}

export function buildWhatsAppShareUrl(text: string, phoneE164: string = CONTACT_PHONE_E164): string {
  const digits = phoneE164.replace(/\D/g, '');
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${digits}?text=${encoded}`;
}

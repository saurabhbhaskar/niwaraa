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

/** Default greeting when someone opens a chat from the site. */
export const WHATSAPP_GREETING = `Hi ${SITE_NAME}, I'd like to talk about an interior project.`;

/** Opens a chat with the company's WhatsApp number. */
export function buildWhatsAppChatUrl(text: string = WHATSAPP_GREETING, phoneE164: string = CONTACT_PHONE_E164): string {
  return `https://wa.me/${phoneE164.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppShareUrl(text: string, phoneE164: string = CONTACT_PHONE_E164): string {
  const digits = phoneE164.replace(/\D/g, '');
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${digits}?text=${encoded}`;
}

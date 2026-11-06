import { WhatsAppIcon } from '@/components/share/WhatsAppIcon';
import { buildWhatsAppChatUrl } from '@/lib/share/whatsapp';

/** Fixed bottom-right button that opens a WhatsApp chat with the studio. */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Niwaraa on WhatsApp"
      className="wa-float"
    >
      <span className="wa-float_pulse" aria-hidden="true"></span>
      <span className="wa-float_ico">
        <WhatsAppIcon />
      </span>
      <span className="wa-float_label">Chat with us</span>
    </a>
  );
}

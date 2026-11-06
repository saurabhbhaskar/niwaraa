import { WhatsAppIcon } from '@/components/share/WhatsAppIcon';
import { buildWhatsAppChatUrl } from '@/lib/share/whatsapp';

/**
 * WhatsApp chat link styled as a `.social-btn`, for the social strip
 * (pass it to `<SocialMediaIcons extra={...} />`).
 */
export function WhatsAppSocialLink() {
  return (
    <a
      href={buildWhatsAppChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      title="Chat on WhatsApp"
      hover-social=""
      className="social-btn w-inline-block is-link"
    >
      <div hover="ico" className="ico-16">
        <div className="ico w-embed">
          <WhatsAppIcon />
        </div>
      </div>
      <div data-comma="" className="social-btn_line">
        <div className="line-h"></div>
      </div>
    </a>
  );
}

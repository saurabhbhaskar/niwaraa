/**
 * Circular call-to-action used across the site ("Get in touch", "Book a call now").
 *
 * Keeps the original Webflow hooks so the existing GSAP layer still drives it:
 *   - `data-magnetic-btn` / `data-magnetic-inner` → magnetic pull (desktop)
 *   - `hover-btn-circle` + `[data-arc]`           → arcs close the ring on hover
 *   - `hover-nav-item` + two `[hover='text']`     → letter-roll text swap
 *
 * On top of that (styles in theme.css, `.btn-circle.is-cta`):
 *   - frosted disc behind the label so it stays legible over photos and maps
 *   - stronger base ring, larger label, arrow that slides on hover
 *   - fill that grows from the centre on hover, idle pulse ring
 */

type CircleButtonProps = {
  label: string;
  /** Link target. Ignored when `modal` is set. */
  href?: string;
  /** Opens a site modal instead of navigating (e.g. `book-a-call`). */
  modal?: 'book-a-call';
};

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="100%" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
    </svg>
  );
}

export function CircleButton({ label, href = '/contact', modal }: CircleButtonProps) {
  const target = modal ? '#' : href;

  return (
    <div
      data-modal-cta-btn={modal}
      data-magnetic-btn=""
      hover-nav-item-trigger=""
      hover-btn-circle=""
      className="btn-circle is-cta"
    >
      <div className="btn-circle_pulse" aria-hidden="true"></div>
      <div className="btn-circle_disc" aria-hidden="true"></div>
      <div className="btn-circle_fill" aria-hidden="true"></div>

      <div data-magnetic-inner="" className="btn-circle_label">
        <a hover-nav-item="" aria-label={label} href={target} className="nav-item w-inline-block" tabIndex={-1}>
          <div className="nav-item_label">
            <div className="nav-item_label_text">
              <div hover="text" className="l1">{label}</div>
            </div>
            <div className="nav-item_label_text is-2">
              <div hover="text" className="l1">{label}</div>
            </div>
          </div>
        </a>
        <span className="btn-circle_ico" aria-hidden="true">
          <span className="btn-circle_ico_a"><Arrow /></span>
          <span className="btn-circle_ico_b"><Arrow /></span>
        </span>
      </div>

      <div className="btn-circle_bg w-embed">
        <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(-150 104 104)"></circle>
          <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(30 104 104)"></circle>
          <circle className="btn-circle_ring" cx="104" cy="104" r="103.5" strokeWidth="1" fill="none"></circle>
        </svg>
      </div>

      <a aria-label={label} href={target} className="btn-circle_link w-inline-block"></a>
    </div>
  );
}

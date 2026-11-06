'use client';

import { useEffect, useRef, useState } from 'react';
import { BrandLogoMark } from '@/components/brand/BrandLogoMark';
import { NiwaraaLogo } from '@/components/brand/NiwaraaLogo';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const FORM_TITLE = 'Niwaraa — Book a call';

export function BookCallForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const titleInput = form.querySelector<HTMLInputElement>('input[name="title"]');
    if (titleInput) titleInput.value = FORM_TITLE;

    const urlParams = new URLSearchParams(window.location.search);
    const fields: Record<string, string> = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_url: urlParams.get('utm_url') || '',
      page_url: window.location.href,
    };

    for (const [key, value] of Object.entries(fields)) {
      const input = form.querySelector<HTMLInputElement>(`input[name="${key}"]`);
      if (input) input.value = value;
    }

    const cleanups: Array<() => void> = [];

    for (const field of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.input_field')) {
      const label = field.parentElement?.querySelector('.input_label');
      if (!label) continue;

      const onFocus = () => label.classList.add('focused');
      const onBlur = () => {
        if (!field.value.trim()) label.classList.remove('focused');
      };
      field.addEventListener('focusin', onFocus);
      field.addEventListener('focusout', onBlur);
      cleanups.push(() => {
        field.removeEventListener('focusin', onFocus);
        field.removeEventListener('focusout', onBlur);
      });
    }

    for (const input of form.querySelectorAll<HTMLInputElement>('input[type="tel"]')) {
      const onInput = () => {
        input.value = input.value.replace(/[^\d+\-]/g, '');
      };
      input.addEventListener('input', onInput);
      cleanups.push(() => input.removeEventListener('input', onInput));
    }

    return () => {
      for (const c of cleanups) c();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    setStatus('submitting');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(fd.get('name') ?? ''),
          email: String(fd.get('email') ?? ''),
          phone: String(fd.get('phone') ?? ''),
          message: String(fd.get('message') ?? ''),
          formTitle: String(fd.get('title') ?? FORM_TITLE),
          pageUrl: String(fd.get('page_url') ?? ''),
          utmSource: String(fd.get('utm_source') ?? ''),
          utmMedium: String(fd.get('utm_medium') ?? ''),
          utmCampaign: String(fd.get('utm_campaign') ?? ''),
          utmContent: String(fd.get('utm_content') ?? ''),
          utmUrl: String(fd.get('utm_url') ?? ''),
        }),
      });

      if (!res.ok) throw new Error('submit failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const wrapperClass = [
    'modal_cta_form',
    'w-form',
    status === 'success' ? 'is-success' : '',
    status === 'error' ? 'is-error' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div id="book-a-call" className={wrapperClass}>
      <form
        ref={formRef}
        id="wf-form-Book-a-call"
        name="wf-form-Book-a-call"
        data-name="Book a call"
        method="post"
        className="form_block"
        onSubmit={handleSubmit}
      >
        <div className="modal_cta_l">
          <div className="modal_cta_l_t">
            <div className="modal_cta_a">
              <h1 className="a2 b-desk">Book a call</h1>
              <div className="a1 b-mob">Book a call</div>
            </div>
            <div className="u-24"></div>
          </div>
          <div className="modal_cta_l_b">
            <div className="modal_cta_desc">
              <div data-modal-close="menu" aria-label="Niwaraa" className="logo_symbol ico-48 b-mob">
                <div className="logo w-embed">
                  <NiwaraaLogo />
                </div>
              </div>
              <div className="u-32 b-mob"></div>
              <p className="l1 mob_a-center">Leave your details and we will get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
        <div className="modal_cta_c_c">
          <div className="modal_cta_c_line">
            <div data-scroll-reveal="line" className="line-v"></div>
          </div>
          <div className="modal_cta_c_logo">
            <BrandLogoMark closeMenuOnClick />
          </div>
          <div className="modal_cta_c_line">
            <div data-scroll-reveal="line" className="line-v"></div>
          </div>
        </div>
        <div className="modal_cta_r">
          <div className="modal_cta_form_c">
            <div className="form_block_t">
              <div className="u-32 b-desk"></div>
              <div className="u-96 b-mob"></div>
            </div>
            <div className="form_block_list">
              <input className="d-none w-input" maxLength={256} name="title" type="text" id="title" readOnly />
              <div className="input">
                <div className="input_label">
                  <label htmlFor="name" className="l1 reg">
                    Name:
                  </label>
                </div>
                <input
                  className="input_field l1 w-input"
                  autoComplete="name"
                  maxLength={256}
                  name="name"
                  type="text"
                  id="name"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="input">
                <div className="input_label">
                  <label htmlFor="email" className="l1 reg">
                    Email:
                  </label>
                </div>
                <input
                  className="input_field l1 w-input"
                  autoComplete="email"
                  maxLength={256}
                  name="email"
                  type="email"
                  id="email"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="input">
                <div className="input_label">
                  <label htmlFor="phone" className="l1 reg">
                    Phone:
                  </label>
                </div>
                <input
                  className="input_field l1 w-input"
                  autoComplete="tel"
                  maxLength={256}
                  name="phone"
                  type="tel"
                  id="phone"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div className="input">
                <div className="input_label">
                  <label htmlFor="message" className="l1 reg">
                    Message:
                  </label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  maxLength={5000}
                  className="input_field area l1 w-input"
                  disabled={status === 'submitting'}
                />
              </div>
              <input className="d-none w-input" maxLength={256} name="utm_source" type="text" id="utm_source" readOnly />
              <input className="d-none w-input" maxLength={256} name="utm_medium" type="text" id="utm_medium" readOnly />
              <input className="d-none w-input" maxLength={256} name="utm_campaign" type="text" id="utm_campaign" readOnly />
              <input className="d-none w-input" maxLength={256} name="utm_content" type="text" id="utm_content" readOnly />
              <input className="d-none w-input" maxLength={256} name="utm_url" type="text" id="utm_url" readOnly />
              <input className="d-none w-input" maxLength={256} name="page_url" type="text" id="page_url" readOnly />
              <div className="u-160 b-mob"></div>
            </div>
            <div className="form_block_b">
              <div className="form_block_legal">
                <div className="p2 inline">By submitting, you agree to our</div>
                <div data-text="p" className="legal-cms inline w-dyn-list">
                  <div data-comma-list="" role="list" className="legal-cms_list inline w-dyn-items">
                    <div role="listitem" className="legal-cms_list_item inline w-dyn-item">
                      <a href="/contact" className="text-link inline w-inline-block">
                        <div className="p2 inline">Privacy & contact policy</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                data-form-btn=""
                hover-btn=""
                hover-nav-item=""
                aria-label="Submit"
                data-wf--btn--variant="sec"
                className="btn w-inline-block"
                disabled={status === 'submitting'}
              >
                <div className="btn_label">
                  <div className="btn_label_text">
                    <div hover="text" className="l1">
                      {status === 'submitting' ? 'Sending…' : 'Submit'}
                    </div>
                  </div>
                  <div className="btn_label_text is-2">
                    <div hover="text" className="l1">
                      {status === 'submitting' ? 'Sending…' : 'Submit'}
                    </div>
                  </div>
                </div>
                <div className="btn_bg">
                  <div hover="bg" className="btn_bg_fill"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="form_success w-form-done">
        <div className="form_success_c">
          <div className="form_success_title">
            <p className="l1 a-center">We&apos;ve received your request</p>
            <div className="u-160 b-mob"></div>
          </div>
          <div className="form_success_a">
            <p className="a2 a-center">Thank you</p>
          </div>
          <div className="form_success_desc">
            <div className="u-48 b-mob"></div>
            <p className="p1 a-center">
              Our team will review your message and respond personally. We typically reply within one business day.
            </p>
          </div>
        </div>
      </div>
      <div className="form_error theme_on-dark w-form-fail">
        <div className="l1 a-center">Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  );
}

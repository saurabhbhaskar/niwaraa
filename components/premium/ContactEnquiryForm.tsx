'use client';

import { FormEvent, useState } from 'react';

const projectTypes = ['Residential', 'Commercial', 'Renovation', 'Turnkey Interior'];
const propertyTypes = ['Apartment', 'Villa', 'Office', 'Retail', 'Other'];
const budgets = ['5–15 L', '15–30 L', '30–60 L', '60 L+', 'Prefer to discuss'];
const locations = ['Baner', 'Kalyani Nagar', 'Koregaon Park', 'Wakad', 'Other / Pune'];

export function ContactEnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const projectType = String(data.get('projectType') || '');
    const propertyType = String(data.get('propertyType') || '');
    const budget = String(data.get('budget') || '');
    const location = String(data.get('location') || '');
    const message = String(data.get('message') || '').trim();

    const body = [
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Property type: ${propertyType}`,
      `Budget: ${budget}`,
      `Location: ${location}`,
      '',
      message,
    ].join('\n');

    const mailto = `mailto:connect@niwaraa.com?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="ni-form-success" role="status">
        <p className="ni-form-success__title">Thank you</p>
        <p>
          We&apos;ve received your request. Our team will review your message and respond personally,
          typically within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="ni-form" onSubmit={onSubmit}>
      <div className="ni-form__row">
        <label className="ni-field">
          <span>Full Name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="ni-field">
          <span>Mobile Number *</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <label className="ni-field">
        <span>Email Address</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <div className="ni-form__row">
        <label className="ni-field">
          <span>Project Type</span>
          <select name="projectType" defaultValue="">
            <option value="" disabled>Select</option>
            {projectTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="ni-field">
          <span>Property Type</span>
          <select name="propertyType" defaultValue="">
            <option value="" disabled>Select</option>
            {propertyTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="ni-form__row">
        <label className="ni-field">
          <span>Budget Range</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Select</option>
            {budgets.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="ni-field">
          <span>Preferred Location</span>
          <select name="location" defaultValue="">
            <option value="" disabled>Select</option>
            {locations.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="ni-field">
        <span>Your Message</span>
        <textarea name="message" rows={5} />
      </label>
      <button type="submit" className="ni-btn ni-btn--submit">
        Start Your Project <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

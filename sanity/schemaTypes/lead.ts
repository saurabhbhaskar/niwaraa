import { defineField, defineType } from 'sanity';

/**
 * A "Book a call" enquiry. Documents are created by app/api/leads/route.ts —
 * keep the field names in sync with that route.
 */
export const lead = defineType({
  name: 'lead',
  title: 'Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (r) => r.required().email() }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 5 }),
    defineField({ name: 'formTitle', title: 'Form', type: 'string', readOnly: true }),
    defineField({ name: 'pageUrl', title: 'Submitted from page', type: 'url', readOnly: true }),
    defineField({ name: 'submittedAt', title: 'Submitted at', type: 'datetime', readOnly: true }),
    defineField({
      name: 'notes',
      title: 'Internal notes',
      type: 'text',
      rows: 4,
      description: 'Follow-up notes for the team. Not visible to the customer.',
    }),
    defineField({ name: 'utmSource', title: 'UTM source', type: 'string', readOnly: true, group: 'tracking' }),
    defineField({ name: 'utmMedium', title: 'UTM medium', type: 'string', readOnly: true, group: 'tracking' }),
    defineField({ name: 'utmCampaign', title: 'UTM campaign', type: 'string', readOnly: true, group: 'tracking' }),
    defineField({ name: 'utmContent', title: 'UTM content', type: 'string', readOnly: true, group: 'tracking' }),
    defineField({ name: 'utmUrl', title: 'Landing URL', type: 'string', readOnly: true, group: 'tracking' }),
  ],
  groups: [
    { name: 'tracking', title: 'Tracking' },
  ],
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { name: 'name', email: 'email', phone: 'phone', status: 'status', submittedAt: 'submittedAt' },
    prepare({ name, email, phone, status, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString('en-IN') : '';
      const badge = status === 'contacted' ? '🟡' : status === 'closed' ? '⚪' : '🟢';
      return {
        title: `${badge} ${name ?? 'Unnamed'}`,
        subtitle: [email, phone, date].filter(Boolean).join(' · '),
      };
    },
  },
});

'use client';

/**
 * Sanity Studio, embedded at /studio (app/(studio)/studio/[[...tool]]/page.tsx).
 * Project + dataset come from .env (NEXT_PUBLIC_SANITY_*).
 */
import { createElement, Suspense } from 'react';
import { defineConfig, definePlugin, type FieldProps, type InputProps } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from '@/lib/sanity/env';
import { schemaTypes } from '@/sanity/schemaTypes';

/**
 * Sanity's comments plugin lazy-loads a wrapper around every field. That wrapper
 * suspends, and Studio then warns and shows a skeleton for each lead field.
 * This plugin sits outside that wrapper and gives the suspend a sized fallback.
 */
const formSuspense = definePlugin({
  name: 'niwaraa/form-suspense',
  form: {
    components: {
      field: function FieldSuspenseBoundary(props: FieldProps) {
        return createElement(
          Suspense,
          { fallback: createElement('div', { style: { minHeight: 76 } }) },
          props.renderDefault(props),
        );
      },
      input: function InputSuspenseBoundary(props: InputProps) {
        return createElement(
          Suspense,
          { fallback: createElement('div', { style: { minHeight: 41 } }) },
          props.renderDefault(props),
        );
      },
    },
  },
});

export default defineConfig({
  name: 'niwaraa',
  title: 'Niwaraa',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  // Lead inbox does not use field comments. Leaving them on makes every field
  // wait on a Studio feature request, which is what throws "TypeError: network error".
  document: {
    comments: { enabled: false },
  },
  scheduledPublishing: { enabled: false },
  releases: { enabled: false },
  tasks: { enabled: false },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Niwaraa')
          .items([
            S.listItem()
              .title('New leads')
              .child(
                S.documentList()
                  .title('New leads')
                  .apiVersion(apiVersion)
                  .filter('_type == "lead" && status == "new"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Contacted')
              .child(
                S.documentList()
                  .title('Contacted')
                  .apiVersion(apiVersion)
                  .filter('_type == "lead" && status == "contacted"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
              ),
            S.divider(),
            S.documentTypeListItem('lead').title('All leads'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    formSuspense(),
  ],
});

'use client';

/**
 * Sanity Studio, embedded at /studio (app/(studio)/studio/[[...tool]]/page.tsx).
 * Project + dataset come from .env (NEXT_PUBLIC_SANITY_*).
 */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from '@/lib/sanity/env';
import { schemaTypes } from '@/sanity/schemaTypes';

export default defineConfig({
  name: 'niwaraa',
  title: 'Niwaraa',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
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
                  .filter('_type == "lead" && status == "new"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Contacted')
              .child(
                S.documentList()
                  .title('Contacted')
                  .filter('_type == "lead" && status == "contacted"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }]),
              ),
            S.divider(),
            S.documentTypeListItem('lead').title('All leads'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

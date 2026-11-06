/** Lets `npx sanity <command>` (e.g. `sanity cors add`, `sanity deploy`) find the project. */
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  },
});

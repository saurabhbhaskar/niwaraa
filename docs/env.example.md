# Environment variables

Copy these into `niwaraa/.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://www.niwaraa.com
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_WRITE_TOKEN=
```

Create a Sanity project at https://www.sanity.io/manage and add an API token with **Editor** (create) permissions.

After updating schemas, deploy them with:

```
npx sanity schema deploy
```

(from the `niwaraa` directory, with project id configured)

# Sanity setup (lead inbox)

## 1. Create a project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a project.
2. Add the values to `niwaraa/.env.local` (see `docs/env.example.md`).

## 2. API token

In the project → **API** → **Tokens** → add a token with **Editor** permissions.  
Set it as `SANITY_API_WRITE_TOKEN` (server-only, never commit).

## 3. Deploy the `lead` document schema

From `niwaraa`, with env vars loaded:

```bash
npx sanity@latest init --env-in-file .env.local --create-project false --dataset production
```

When prompted, reuse this repo and add a schema file matching the API (document type **`lead`**):

| Field | Type |
|-------|------|
| name | string |
| email | string |
| phone | string |
| message | text |
| formTitle | string |
| pageUrl | url |
| utmSource | string |
| utmMedium | string |
| utmCampaign | string |
| utmContent | string |
| utmUrl | string |
| status | string (`new`, `contacted`, `closed`) |
| submittedAt | datetime |

Then deploy:

```bash
npx sanity schema deploy
```

Open Sanity Studio from the manage dashboard to view **Lead** documents after form submissions.

## 4. Test

Run the site, open **Book a call**, submit the form, and confirm a new **Lead** appears in Studio.

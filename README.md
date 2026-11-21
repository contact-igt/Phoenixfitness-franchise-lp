# Phoenix Fitness Franchise

Run npm install, then npm run dev. The landing page is available at / and /franchise.

Copy `.env.example` to `.env.local` and set `PHOENIX_LEADS_CLIENT_KEY` to the existing Phoenix Fitness tenant key in Invictus. Set `PHOENIX_LEADS_API_URL` to the Invictus lead backend's `/api/v1/phoenix-fitness/franchise/register` endpoint. The example uses the local backend on port 8000. Keep both settings server-side and restart the landing page after changing them.

Enquiries from this standalone landing page appear under **Phoenix Fitness → Franchise Leads**. The main Phoenix Fitness website continues to use `/api/v1/phoenix-fitness/website/register` and appears under **Website Leads**, including its franchise form.

Run npm run build to create the production build and npm run start to serve it.

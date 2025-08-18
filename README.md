# Portfolio (Next.js 15 + React 19)

A modern developer portfolio with Projects, an AI Assistant, and rich project summaries. Built with Next.js App Router, Tailwind CSS, MongoDB, NextAuth (GitHub), and streaming AI via Gemini/OpenRouter. Designed to be easy to clone, customize, and deploy.

## Features

- Projects with GitHub integration
  - Add/edit/delete projects (protected by admin email)
  - Auto-generate clean URL slug from title
  - Rich Markdown descriptions (MDEditor)
  - Server actions to CRUD in MongoDB and revalidate pages
  - Auto project summary powered by AI, cached in MongoDB
- AI Assistant (streaming)
  - Gemini 2.5 Flash via Google Generative AI
  - DeepSeek via OpenRouter (optional)
  - Pulls repo README and directory structure for context
- Authentication via GitHub (NextAuth)
- Beautiful dark UI using Tailwind + custom glass/gradient styling
- Easy Vercel deployment with analytics

## Tech Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS + custom CSS utilities
- MongoDB (Atlas) with native driver
- NextAuth (GitHub provider)
- @uiw/react-md-editor for markdown editing
- AI: @google/generative-ai + OpenRouter (openai client)
- Deployed on Vercel (optional)

## Quickstart

1) Clone and install

```bash
# with bun (recommended)
bun install

# alternatives
yarn install
# or: npm install / pnpm install
```

2) Create a .env.local

Copy/paste and fill in values. Only the MongoDB and GitHub OAuth entries are required to get started.

```bash
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace_with_long_random_string

# Admin: used to show Add Project button and protect routes
NEXT_PUBLIC_ADMIN_EMAIL=youremail@example.com

# MongoDB
ATLAS_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority&appName=<app>
COLLECTION_DB=<your_database_name>

# GitHub OAuth (NextAuth provider)
GITHUB_CLIENT_ID=<github_oauth_client_id>
GITHUB_CLIENT_SECRET=<github_oauth_client_secret>

# Optional: GitHub token to read repo content (raises API limits)
GITHUB_API=<github_personal_access_token_optional>

# AI Providers
# Google Generative AI (Gemini 2.5 Flash)
GOOGLE_CHAT_API=<google_gemini_api_key>
# OpenRouter key to access DeepSeek via OpenRouter
DEEPSEEK_CHAT_API=<openrouter_api_key>
```

3) Run the dev server

```bash
bun run dev
# open http://localhost:3000
```

## Authentication (GitHub OAuth)

Create a GitHub OAuth App:

- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/api/auth/callback/github

Then set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in .env.local.

To see the Add Project button, set NEXT_PUBLIC_ADMIN_EMAIL to match the email of the logged-in GitHub account.

## MongoDB (Atlas)

This app uses the native MongoDB driver. Provide ATLAS_URI and COLLECTION_DB. Collections are created dynamically as needed:

- projects
- chatbot (for cached summaries/context)

Connection: see `src/db/conn.js`.

## AI configuration

- Gemini: set GOOGLE_CHAT_API.
- DeepSeek via OpenRouter: set DEEPSEEK_CHAT_API.
- The Assistant and project summary features will stream responses and cache summaries.

Relevant code:
- `src/server-action/chatbot.js` (streaming handlers, summary generation)
- `src/utils/utils.js` (GitHub README/tree fetch)

## Usage

1) Sign in with GitHub from the header.
2) If your GitHub email matches NEXT_PUBLIC_ADMIN_EMAIL, you’ll see an “Add Project” button on the Projects page.
3) Add a project with:
   - Title (slug is generated automatically)
   - Description (Markdown editor)
   - GitHub URL and Live URL (optional)
4) Visit the project detail page; a summary is generated and cached automatically.

## Customization

Branding and typography
- Title/description: `src/app/layout.jsx` (metadata)
- Header text/logo: `src/sharedComponents/Header/index.jsx`
- Global fonts: `layout.jsx` (Oswald, Roboto)

Colors and glass effects
- Tailwind is enabled in `src/app/globals.css` with custom CSS variables:
  - `--color-bg`, `--color-accent`, `--gradient-accent`, radii, shadows
- Adjust gradients and glass look in `.glass-card`, `.project-link`, etc.

Home content
- Edit sections under `src/components/home/*` and data under `src/info/*` (education, experience, skills).

Projects UI
- Cards: `src/components/projects/ProjectCard.jsx`
- Project page (tabs/summary/etc): `src/app/projects/[slug]/*`
- Add form (Tailwind UI): `src/app/projects/add/ProjectForm.jsx`

Admin controls
- Admin email: `NEXT_PUBLIC_ADMIN_EMAIL`
- Protected routes: `src/sharedComponents/ProtectedRoutes`

Analytics
- Vercel Analytics already wired via `@vercel/analytics/next` in `layout.jsx`.

## Project structure (trimmed)

```
src/
  app/
    api/auth/[...nextauth]/route.js    # GitHub OAuth
    assistant/                         # AI assistant UI
    projects/                          # Projects pages
      add/ProjectForm.jsx              # Tailwind add/edit form
  db/conn.js                           # MongoDB connection
  server-action/                       # Server actions (projects, chatbot, github)
  components/                          # UI components
  sharedComponents/                    # Reusable headers/buttons, etc.
  info/                                # Static data (education, experience, skills)
```

## Scripts

```bash
# dev
bun run dev
# build
bun run build
# start
bun run start
# lint
bun run lint
```

## Deployment (Vercel)

1) Push this repo to GitHub.
2) Import into Vercel and select this project.
3) Add the same environment variables in Vercel project settings (Production + Preview):
   - NEXTAUTH_URL (your Vercel URL)
   - NEXTAUTH_SECRET
   - NEXT_PUBLIC_ADMIN_EMAIL
   - ATLAS_URI, COLLECTION_DB
   - GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
   - Optional: GITHUB_API, GOOGLE_CHAT_API, DEEPSEEK_CHAT_API
4) Set GitHub OAuth callback to `https://<your-vercel-domain>/api/auth/callback/github`.
5) Deploy.

## Troubleshooting

- 401 on GitHub OAuth: verify callback URL and client secret.
- Projects don’t save: check ATLAS_URI and COLLECTION_DB; ensure your IP/network is allowed in Atlas.
- Rate-limited on GitHub API: set GITHUB_API token.
- AI errors: verify GOOGLE_CHAT_API or DEEPSEEK_CHAT_API are set.
- Admin button not visible: ensure your signed-in GitHub email matches NEXT_PUBLIC_ADMIN_EMAIL.
- If GitHub login still fails, double-check `src/app/api/auth/[...nextauth]/route.js` has `clientSecret: process.env.GITHUB_CLIENT_SECRET`.

## License

This project is open for personal and portfolio use. If you plan to fork and publish, consider adding an MIT license in your fork or adapting to your needs.

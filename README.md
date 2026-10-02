# JobShunt

JobShunt is a full-stack job-platform app built with Next.js 16, Prisma, and NextAuth. It ships a polished 10-section marketing landing page (animated with Framer Motion) plus a dashboard experience — apply-anywhere flows, scrutinized job listings, in-demand roles, revolutionary profiles, and curated career resources.

> **Deployment note:** this is a dynamic app (database + authentication). It is not currently deployed because it requires secrets that do not exist in this pipeline (`DATABASE_URL`, NextAuth session secret, provider credentials). See "Environment Variables".

## Features

- **10-section landing page** — navbar, hero with stats and CTAs, "Apply Anywhere", "Scrutinized Jobs", dark tabs with career stats, in-demand roles, revolutionary profile, career breakthrough browser mockup, curated resources, FAQ (accordion), footer with social links, floating scroll widget.
- **Framer Motion animations** — fadeInUp, whileInView, whileHover throughout.
- **Dashboard UI** — browser-mockup career dashboard preview.
- **Drag & drop** — @dnd-kit powered interactions.
- **Data tables** — TanStack Table with sorting/filtering.
- **Charts** — recharts for career stats.
- **Auth** — NextAuth integration (sign-in flows).
- **Persistence** — Prisma ORM (see `prisma/schema.prisma`; `db:push` / `db:migrate` scripts).
- **Internationalization** — next-intl.
- **Dark mode** — next-themes.
- **Markdown content** — @mdxeditor/editor and react-markdown for resources/case notes.

## Tech Stack

- **Framework:** Next.js 16 (App Router), TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui (Radix primitives), Lucide icons
- **Motion:** Framer Motion
- **Auth:** NextAuth
- **Database:** Prisma ORM (SQLite-compatible custom.db in `db/`)
- **Data:** TanStack Query + TanStack Table, Zustand, Zod, react-hook-form

## Quick Start

```bash
bun install        # or: npm install
bun run db:generate
bun run db:push    # create tables from prisma/schema.prisma
bun run dev        # http://localhost:3000
```

## Scripts

| Script            | Description                                  |
|-------------------|----------------------------------------------|
| `dev`             | Start dev server on port 3000                |
| `build`          | Production build (standalone output)         |
| `start`          | Run standalone production server (bun)       |
| `lint`           | ESLint                                       |
| `db:generate`    | Generate Prisma client                       |
| `db:push`        | Push schema to database (no migrations)      |
| `db:migrate`     | Run dev migrations                           |
| `db:reset`       | Reset database                               |

## Project Structure

```
├── src/app/          # App Router: landing sections, dashboard, api/
├── src/components/   # UI components + shadcn/ui primitives
├── prisma/           # schema.prisma
├── db/               # local database file
├── mini-services/    # service helpers
├── public/           # images, icons
├── .zscripts/        # helper scripts
├── Caddyfile         # reverse-proxy config for self-hosting
└── worklog.md        # build worklog
```

## Environment Variables

| Variable       | Required | Description                              |
|----------------|----------|------------------------------------------|
| `DATABASE_URL` | Yes      | Database connection string for Prisma    |
| `NEXTAUTH_SECRET` | Yes   | Session encryption secret (NextAuth)     |
| `NEXTAUTH_URL` | Yes      | Canonical app URL (production)           |

Auth providers (Google/GitHub/etc.) need their own client ID/secret pairs when enabled.

## Deploy

Self-host with the included `Caddyfile` (reverse proxy) or deploy to a Node host (Vercel/Netlify/VPS):

```bash
bun run build
bun run start        # serves .next/standalone/server.js
```

Set the environment variables above before starting. This app cannot be deployed as a pure static site because it uses API routes, Prisma, and authentication.

---

Built by Girish Lade — https://ladestack.in

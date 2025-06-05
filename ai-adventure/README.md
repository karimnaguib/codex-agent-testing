# AI Adventure Platform

This project is a proof of concept for the **AI Adventure Retreat** value ladder.
It uses Next.js 14 with TypeScript, tRPC, Prisma and NextAuth.

## Setup

```bash
npm install
cp .env.example .env
# update .env with your secrets
npx prisma generate
```

Start the dev server:

```bash
npm run dev
```

Seed demo data (10 leads, 5 paid users):

```bash
npm run seed
```

## API Examples

Register a webinar lead:

```bash
curl -X POST http://localhost:3000/api/trpc/lead.registerWebinar -H "Content-Type: application/json" -d '{"email":"test@example.com"}'
```

NextAuth endpoints are available under `/api/auth/*`.

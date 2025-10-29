# PompyBoard website

## Must read

- https://nextjs.org/docs

## Setting up

1. [Setup devenv](https://devenv.sh/getting-started).
2. Create postgreSQL database
   - if you don't know where to start, check [neon][neon] / [supabase][supabase]
3. Create `.env`. See `.env.example`.

## Commands

### Development

```bash
# Start dev server with HMR
pnpm dev

# Run linter
pnpm lint

# Type check
pnpm typecheck

# Format code
pnpm format

# Check formatting
pnpm format:check
```

### Database

```bash
# Generate migrations
pnpm db:generate

# Run migrations
pnpm db:migrate

# Push schema to database
pnpm db:push

# Open Drizzle Studio
pnpm db:studio
```

### Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

See `.env.example` for required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `AUTH_OSU_ID`: OAuth ID (if using authentication)
- `AUTH_OSU_SECRET`: OAuth secret (if using authentication)
- `AUTH_SECRET`: Authentication secret (generate with `openssl rand -base64 33`)

[neon]: https://neon.com
[supabase]: https://supabase.com

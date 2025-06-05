import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/server/api/root'

const handler = (req: Request) =>
  fetchRequestHandler({ req, router: appRouter, path: '/api/trpc' })

export { handler as GET, handler as POST }

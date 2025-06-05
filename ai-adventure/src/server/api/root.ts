import { router } from './trpc'
import { leadRouter } from './routers/lead'

export const appRouter = router({
  lead: leadRouter,
})

export type AppRouter = typeof appRouter

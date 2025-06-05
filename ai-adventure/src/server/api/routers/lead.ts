import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { prisma } from '../../db'

export const leadRouter = router({
  registerWebinar: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      // Basic lead creation; Zoom integration is TODO
      const lead = await prisma.lead.create({
        data: {
          email: input.email,
          source: 'WEBINAR',
        },
      })
      return { id: lead.id }
    }),
})

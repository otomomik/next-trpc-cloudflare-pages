import { trpcPrivate } from '@/server/trpc'

const { router, procedure } = trpcPrivate

export const userRouter = router({
  getUser: procedure.query(async ({ ctx }) => {
    return ctx.user
  }),
})

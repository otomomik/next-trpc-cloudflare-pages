import { trpcPublic } from '@/server/trpc'

const { router, procedure } = trpcPublic

export const blogRouter = router({
  getBlogList: procedure.query(async () => {
    return ['初めまして', 'Next13 + tRPC + Cloudflare']
  }),
})

import { trpcPublic } from '@/server/trpc'

import { blogRouter } from './blog'

const { mergeRouters } = trpcPublic

export const appPublicRouter = mergeRouters(blogRouter)

export type AppPublicRouter = typeof appPublicRouter

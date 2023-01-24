import { trpcPrivate } from '@/server/trpc'

import { userRouter } from './user'

const { mergeRouters } = trpcPrivate

export const appPrivateRouter = mergeRouters(userRouter)

export type AppPrivateRouter = typeof appPrivateRouter

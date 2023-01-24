import { initTRPC } from '@trpc/server'

import type { PrivateContext } from '@/server/context'

const t = initTRPC.context<PrivateContext>().create()

export const router = t.router

export const middleware = t.middleware

export const procedure = t.procedure

export const mergeRouters = t.mergeRouters

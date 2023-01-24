import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { createPrivateContext } from '@/server/context'
import { appPrivateRouter } from '@/server/routers/private/_app'

import type { NextRequest } from 'next/server'

const middleware = async (req: NextRequest): Promise<Response> => {
  return await fetchRequestHandler({
    endpoint: '/api/private/trpc',
    req,
    router: appPrivateRouter,
    createContext: createPrivateContext,
  })
}

export default middleware

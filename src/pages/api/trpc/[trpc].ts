import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from '@/server/routers/_app'

import type { NextRequest } from 'next/server'

const middleware = async (req: NextRequest): Promise<Response> => {
  return await fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  })
}

export default middleware

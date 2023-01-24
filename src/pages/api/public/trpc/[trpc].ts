import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appPublicRouter } from '@/server/routers/public/_app'

import type { NextRequest } from 'next/server'

const middleware = async (req: NextRequest): Promise<Response> => {
  return await fetchRequestHandler({
    endpoint: '/api/public/trpc',
    req,
    router: appPublicRouter,
    createContext: () => ({}),
  })
}

export default middleware

import { createTRPCProxyClient, loggerLink, httpBatchLink } from '@trpc/client'

import type { AppPublicRouter } from '@/server/routers/public/_app'
import { getApiUrl } from '@/utils'

export const trpcPublicClient = createTRPCProxyClient<AppPublicRouter>({
  links: [
    loggerLink({
      enabled: (options) =>
        (process.env.NODE_ENV === 'development' &&
          typeof window !== 'undefined') ||
        (options.direction === 'down' && options.result instanceof Error),
    }),
    httpBatchLink({
      url: `${getApiUrl()}/api/public/trpc`,
    }),
  ],
})

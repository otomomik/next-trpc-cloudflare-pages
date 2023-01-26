import { createTRPCProxyClient, loggerLink, httpBatchLink } from '@trpc/client'

import type { AppPrivateRouter } from '@/server/routers/private/_app'
import { getApiUrl } from '@/utils'

export const trpcPrivateClient = createTRPCProxyClient<AppPrivateRouter>({
  links: [
    loggerLink({
      enabled: (options) =>
        (process.env.NODE_ENV === 'development' &&
          typeof window !== 'undefined') ||
        (options.direction === 'down' && options.result instanceof Error),
    }),
    httpBatchLink({
      url: `${getApiUrl()}/api/private/trpc`,
      headers: () => {
        return {
          authorization: `Bearer `,
        }
      },
    }),
  ],
})

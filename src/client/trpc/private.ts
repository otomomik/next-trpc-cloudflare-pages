import { createTRPCProxyClient, loggerLink, httpBatchLink } from '@trpc/client'

import type { AppPrivateRouter } from '@/server/routers/private/_app'

export const trpcPrivateClient = createTRPCProxyClient<AppPrivateRouter>({
  links: [
    loggerLink({
      enabled: (options) =>
        (process.env.NODE_ENV === 'development' &&
          typeof window !== 'undefined') ||
        (options.direction === 'down' && options.result instanceof Error),
    }),
    httpBatchLink({
      url: `${
        process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
      }/api/private/trpc`,
      headers: () => {
        return {
          authorization: `Bearer `,
        }
      },
    }),
  ],
})

import { createTRPCProxyClient, loggerLink, httpBatchLink } from '@trpc/client'

import type { AppPublicRouter } from '@/server/routers/public/_app'

export const trpcPublicClient = createTRPCProxyClient<AppPublicRouter>({
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
      }/api/public/trpc`,
    }),
  ],
})

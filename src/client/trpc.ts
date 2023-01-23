import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

import type { AppRouter } from '@/server/routers/_app'

console.log(process.env)

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${
        process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
      }/api/trpc`,
    }),
  ],
})

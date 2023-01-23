import { AppRouter } from "@/server/routers/_app";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // url: "http://localhost:3000/api/trpc",
      url: "https://next-trpc.pages.dev/api/trpc",
    }),
  ],
});

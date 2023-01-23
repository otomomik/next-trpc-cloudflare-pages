import { AppRouter } from "@/server/routers/_app";
import { createTRPCProxyClient, httpLink } from "@trpc/client";
import superjson from "superjson";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpLink({
      // url: "http://localhost:3000/api/trpc",
      url: "https://next-trpc.pages.dev/api/trpc",
    }),
  ],
});

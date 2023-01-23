import { mergeRouters } from "@/server/trpc";
import { blogRouter } from "./blog";

export const appRouter = mergeRouters(blogRouter);

export type AppRouter = typeof appRouter;

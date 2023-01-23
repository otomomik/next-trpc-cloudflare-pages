import { router, procedure } from "@/server/trpc";

export const blogRouter = router({
  getBlogList: procedure.query(async () => {
    return ["OK", "NG"];
  }),
});

import type { inferAsyncReturnType } from '@trpc/server'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

interface Ctx {
  user: string
}

export const createPrivateContext = async ({
  req,
}: FetchCreateContextFnOptions): Promise<Ctx> => {
  // TODO JWT認証を行う
  return {
    user: 'otomomik',
  }
}
export type PrivateContext = inferAsyncReturnType<typeof createPrivateContext>

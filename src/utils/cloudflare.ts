type Env =
  | {
      KV: KVNamespace
    }
  // eslint-disable-next-line @typescript-eslint/ban-types
  | {}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __ENV__: Env

export const getCloudflareEnv = (): Env => {
  if (typeof window !== 'undefined') {
    return {}
  }
  return __ENV__
}

import Link from 'next/link'
import { use } from 'react'

import { trpcPublicClient } from '@/client/trpc'

import type { FC } from 'react'

const Server: FC = () => {
  const blogList = use(trpcPublicClient.getBlogList.query())

  return (
    <div>
      <h1>Server</h1>
      <p>result</p>
      <code>
        <pre>{JSON.stringify(blogList)}</pre>
      </code>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default Server

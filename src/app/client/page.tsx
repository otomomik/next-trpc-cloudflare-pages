'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { trpcClient } from '@/client/trpc'

import type { FC } from 'react'

const Client: FC = () => {
  const [blogList, setBlogList] = useState<string[]>([])

  useEffect(() => {
    const f = async (): Promise<void> => {
      const result = await trpcClient.getBlogList.query()
      setBlogList(result)
    }
    void f()
  }, [])

  return (
    <div>
      <h1>Client</h1>
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

export default Client

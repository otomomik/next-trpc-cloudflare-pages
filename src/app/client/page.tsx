'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { trpcPrivateClient, trpcPublicClient } from '@/client/trpc'

import type { FC } from 'react'

const Client: FC = () => {
  const [user, setUser] = useState<string>('')
  const [blogList, setBlogList] = useState<string[]>([])

  useEffect(() => {
    const f = async (): Promise<void> => {
      const [user, blogList] = await Promise.all([
        trpcPrivateClient.getUser.query(),
        trpcPublicClient.getBlogList.query(),
      ])
      setUser(user)
      setBlogList(blogList)
    }
    void f()
  }, [])

  return (
    <div>
      <h1>Client</h1>
      <p>result</p>
      <code>
        <pre>{user}</pre>
      </code>
      <code>
        <pre>{blogList}</pre>
      </code>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default Client

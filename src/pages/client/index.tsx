import Link from 'next/link'
import { useEffect, useState } from 'react'

import { trpcPrivateClient, trpcPublicClient } from '@/client/trpc'

import type { GetServerSideProps } from 'next'
import type { FC } from 'react'

interface Props {
  blogList: string[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const blogList = await trpcPublicClient.getBlogList.query()

  return {
    props: {
      blogList,
    },
  }
}

const Client: FC<Props> = ({ blogList }) => {
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    const f = async (): Promise<void> => {
      const [user] = await Promise.all([trpcPrivateClient.getUser.query()])
      setUser(user)
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

import Link from 'next/link'

import { trpcPublicClient } from '@/client/trpc'

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

const Server: FC<Props> = ({ blogList }) => {
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

import Link from 'next/link'

import type { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
      <h1>Next + tRPC</h1>
      <div>
        <div>
          <Link href="/server">Server</Link>
        </div>
        <div>
          <Link href="/client">Client</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

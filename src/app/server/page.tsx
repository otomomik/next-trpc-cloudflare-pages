import { trpcClient } from "@/client/trpc";
import Link from "next/link";
import { FC, use } from "react";

const Server: FC = () => {
  const blogList = use(trpcClient.getBlogList.query());

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
  );
};

export default Server;

"use client";
import { trpcClient } from "@/client/trpc";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const Client: FC = () => {
  const [blogList, setBlogList] = useState<string[]>([]);

  useEffect(() => {
    const f = async () => {
      const result = await trpcClient.getBlogList.query();
      setBlogList(result);
    };
    f();
  }, []);

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
  );
};

export default Client;

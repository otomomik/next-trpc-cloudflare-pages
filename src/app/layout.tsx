import { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

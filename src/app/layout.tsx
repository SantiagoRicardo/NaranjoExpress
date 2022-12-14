import "./globals.css";

import { type FC, type ReactNode } from "react";
import { Navbar } from "@/app/(page-lib)/layouts";

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Naranjo Express</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="content" />
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

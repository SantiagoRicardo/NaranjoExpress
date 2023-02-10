import "./globals.css";
import { type FC, type ReactNode } from "react";
import { Navbar } from "@/app/(page-lib)/layouts";
import { Footer } from "@/app/(page-lib)/components";

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
        <link rel="icon" type="image/svg" href="/Naranjo-Express.svg" />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

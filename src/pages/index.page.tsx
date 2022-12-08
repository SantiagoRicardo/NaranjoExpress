import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/layouts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naranjo Express</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/naranjo-express-transparent.png" />
      </Head>

      <div className="flex flex-col">
        <Navbar />
        <h1 className="relative">
          ¡Arreglamos cualquier cosa!
        </h1>
      </div>
    </>
  );
};

export default Home;

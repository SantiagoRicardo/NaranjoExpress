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

      <Navbar />

      <main className="bg-gray-100">

      </main>
    </>
  );
};

export default Home;

import { Form, Hero, Services, Us, Equipment} from "@/pages/(page-lib)/components";
import { type NextPageWithLayout } from "@/pages/_app.page";
import Head from "next/head";
import { Navbar, Footer } from "@/pages/(page-lib)/layouts";

const Home: NextPageWithLayout = () => (
  <>
    <Hero />
    <Us />
    <Services />
    <Equipment />
    <Form />
  </>
);

Home.getLayout = (page) => (
  <>
    <Head>
      <title>Naranjo Express</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="content" />
      <link rel="icon" type="image/svg" href="/Naranjo-Express.svg" />
    </Head>

    <Navbar />
    {page}
    <Footer />
  </>
);

export default Home;

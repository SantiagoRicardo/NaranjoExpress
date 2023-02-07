import { type NextPage } from "next";
import { Footer, Form, Hero, Services, Us } from "@/app/(page-lib)/components";

const Home: NextPage = () => (
  <>
    <Hero />
    <Us />
    <Services />
    <Form />
    <Footer />
  </>
);

export default Home;

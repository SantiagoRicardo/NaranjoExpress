import { type NextPage } from "next";
import { Form, Hero, Services, Us } from "@/app/(page-lib)/components";

const Home: NextPage = () => (
  <>
    <Hero />
    <Us />
    <Services />
    <Form />
  </>
);

export default Home;

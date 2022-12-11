import { type NextPage } from "next";
import { Services } from "@/app/(page-lib)/components";

const Home: NextPage = () => (
  <>
    <section className="relative bg-gradient-to-t from-blue-600 p-5 py-20">
      <div className="m-10">
        <h1 className="p-5 text-5xl font-bold capitalize text-black">
          ¡Mantenga su hogar feliz y saludable!
        </h1>
        <p className="ml-5">
          loreId in reprehenderit excepteur cilnt molliad. etur veniam officia. Enim anim voluptate
          ad fugiat consectetur minim eiusmod amet.
        </p>
      </div>
    </section>

    <Services />

    <section>
      <div className="mt-40 flex flex-col text-center">
        <h1 className="m-5 font-bold text-slate-600">¿Como ayuda naranjo express?</h1>
        <h1 className="text-4xl font-bold text-amber-400">
          Servicio a Domicilio y Cobertura Hogar Hogar, Dulce Hogar
        </h1>
        <p className="m-4 font-semibold text-slate-600">
          Brindamos una experiencia de servicios premium para el hogar que le ahorra tiempo y dinero
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-5 mb-4 w-full rounded-3xl bg-blue-600 p-10 shadow-md sm:w-1/2 md:w-1/3"></div>
      </div>
    </section>
  </>
);

export default Home;

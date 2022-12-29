import { type NextPage } from "next";
import { Services } from "@/app/(page-lib)/components";
import Image from "next/image";

const Home: NextPage = () => (
  <>
    <section className="relative">
      <div className="m-10 justify-center md:flex">
        <div className="pt-10">
          <h1 className="p-5 text-5xl font-bold capitalize text-black">
            ¡Mantenga su hogar feliz y saludable!
          </h1>
          <div className="p-5 text-xl">
            <p>Dejamos que nuestro trabajo de calidad y el compromiso con la satisfacción del cliente sea nuestro lema.</p>
          </div>

          <div className="px-5 py-6">
            <button
              type="button"
              className="rounded-md bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Let&apos;s Go!
            </button>
          </div>
          
        </div>

        <div>
          <Image
            src="/DecorationInterior.jpg"
            alt="Picture of the author"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,229.3C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

    <Services />

    <section>
      <div className="flex flex-col text-center">
        <h1 className="m-5 font-bold text-slate-600">¿Como ayuda naranjo express?</h1>
        <h1 className="text-4xl font-bold text-amber-400">
          Servicio a Domicilio y Cobertura Hogar Hogar, Dulce Hogar
        </h1>
        <p className="m-4 font-semibold text-slate-600">
          Brindamos una experiencia de servicios premium para el hogar que le ahorra tiempo y dinero
        </p>
      </div>
    </section>
  </>
);

export default Home;

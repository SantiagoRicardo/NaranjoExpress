import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/layouts";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const Home: NextPage = () => {
  type Card = {
    id: string;
    title: string;
    description: string;
    svg: string;
  }

  const CARDS: Card[] = [
    {
      id: '1',
      title: 'Mantenimiento del hogar',
      description: 'Cuida tu domicilio con nuestro servicio de mantenimiento y conservación del hogar, plomeria, herreria, pintura y mucho más!.',
      svg: 'HiWrenchScrewdriver',
    },
    {
      id: '2',
      title: 'Pulitura de pisos',
      description: 'En granito y marmol.',
      svg: 'HiWrenchScrewdriver',
    },
    {
      id: '3',
      title: 'Remodelacion de infraestructura',
      description: 'Obra civil y obra blanca',
      svg: 'HiWrenchScrewdriver',
    },
    {
      id: '4',
      title: 'Suministro electrico',
      description: 'Sistemas integrados con mecanismos de control para Generar, transportar y distribuir energía.',
      svg: 'HiWrenchScrewdriver',
    },
    {
      id: '5',
      title: 'Servicio de limpieza',
      description: 'Lavado y aspirado de muebles, alfombras, eliminación de olores, abrillantado de pisos.',
      svg: 'HiWrenchScrewdriver',
    },
    {
      id: '6',
      title: 'Carpintería',
      description: 'Puertas, ventanas, parquets, tarimas, revestimientos, cocinas, armarios, y muebles a medida para baños, cocinas, dormitorios y salón, entre otros.',
      svg: 'HiWrenchScrewdriver',
    },
  ];
  return (
    <>
      <Head>
        <title>Naranjo Express</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/naranjo-express-transparent.png" />
      </Head>

      <div className="flex flex-col">
        <Navbar />
        <section className="relative bg-gradient-to-t from-blue-600 p-5 py-20">
          <div className="m-10">
            <h1 className="text-black font-bold text-5xl capitalize p-5">
              ¡Mantenga su hogar feliz y saludable!
            </h1>
            <p className="ml-5">
              loreId in reprehenderit excepteur cilnt molliad. etur veniam officia. Enim anim voluptate ad fugiat consectetur minim eiusmod amet.
            </p>
          </div>
        </section>

        <section>
          <div className="flex flex-col text-center mt-40">
            <h1 className="font-bold text-slate-600 m-5">
              ¿Como funciona?
            </h1>
            <h1 className="text-4xl font-bold text-amber-400">
              ¡Servicio a domicilio sin problemas, Todo lo que necesites!
            </h1>
            <p className="text-slate-600 font-semibold m-4">
              Llama para agendar tu reparación o mantenimiento con un servicio de naranjo express
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {CARDS.map((cards) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 bg-blue-600 shadow-md rounded-3xl p-10 m-5">
                <HiWrenchScrewdriver />
                <h1 className="font-semibold text-amber-400 text-3xl mb-5" key={cards.title}>
                  {cards.title}
                </h1>
                <p className="font-light text-white text-xs" key={cards.description}>
                  {cards.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col text-center mt-40">
            <h1 className="font-bold text-slate-600 m-5">
              ¿Como ayuda naranjo express?
            </h1>
            <h1 className="text-4xl font-bold text-amber-400">
              Servicio a Domicilio y Cobertura Hogar Hogar, Dulce Hogar
            </h1>
            <p className="text-slate-600 font-semibold m-4">
              Brindamos una experiencia de servicios premium para el hogar que le ahorra tiempo y dinero
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className=" w-full sm:w-1/2 md:w-1/3mb-4 bg-blue-600 shadow-md rounded-3xl p-10 m-5">

            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;

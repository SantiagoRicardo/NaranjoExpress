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
      <div className="mt-25 flex flex-col text-center">
        <h1 className="m-5 font-bold text-slate-600">¿Como ayuda naranjo express?</h1>
        <h1 className="text-4xl font-bold text-amber-400">
          Servicio a Domicilio y Cobertura Hogar Hogar, Dulce Hogar
        </h1>
        <p className="m-4 font-semibold text-slate-600">
          Brindamos una experiencia de servicios premium para el hogar que le ahorra tiempo y dinero
        </p>
      </div>
      
      <div className="md:flex bg-slate-100 rounded-xl p-5 m-20 md:p-0 shadow-xl dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none md:rounded-l-xl rounded-full lg:rounded-l-xl mx-auto" src="/Record.jpg" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            <div className="font-medium">
              <div className="text-blue-700 dark:text-blue-500">
                Guillermo Naranjo
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                CEO, Montería
              </div>
            </div>
          </div>
      </div>
      <div className="md:flex bg-slate-100 rounded-xl p-5 m-20 md:p-0 shadow-xl dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none md:rounded-l-xl rounded-full lg:rounded-l-xl mx-auto" src="/Record.jpg" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            <div className="font-medium">
              <div className="text-blue-700 dark:text-blue-500">
                Guillermo Naranjo
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                CEO, Montería
              </div>
            </div>
          </div>
      </div>
      <div className="md:flex bg-slate-100 rounded-xl p-5 m-20 md:p-0 shadow-xl dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none md:rounded-l-xl rounded-full lg:rounded-l-xl mx-auto" src="/Record.jpg" alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            <div className="font-medium">
              <div className="text-blue-700 dark:text-blue-500">
                Guillermo Naranjo
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                CEO, Montería
              </div>
            </div>
          </div>
      </div>
    </section>
  </>
);

export default Home;

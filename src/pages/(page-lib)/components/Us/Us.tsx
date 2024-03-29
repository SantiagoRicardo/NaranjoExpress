import { type FC } from "react";
import Image from "next/image";
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { scrollIntoViewWithOffset } from "@/utils/dom";

type Picture = {
  svg: any;
  projects: string;
  name: string;
  src1: string;
  src2: string;
  id: string;
};

const pictures: Picture[] = [
  {
    id: "img-1",
    src1: "/CivilWork.png",
    src2: "/Plumber.png",
    svg: UsersIcon,
    projects: "+658",
    name: "Clientes contentos",
  },
  {
    id: "img-2",
    src1: "/Carpenter.png",
    src2: "/FurnitureWashing.png",
    svg: UserGroupIcon,
    projects: "+10",
    name: "Equipos de trabajo",
  },
  {
    id: " img-3",
    src1: "/Blacksmith.png",
    src2: "/Painter.png",
    svg: TrophyIcon,
    projects: "+5",
    name: "Reconocimentos",
  },
  {
    id: " img-4",
    src1: "/PolishFloors.png",
    src2: "/CarpetWashing.png",
    svg: RocketLaunchIcon,
    projects: "+769",
    name: "Proyectos completados",
  },
  {
    id: " img-5",
    src1: "/WhiteWork.png",
    src2: "/ElectricianPerson.png",
    svg: ShieldCheckIcon,
    projects: "+6",
    name: "Verificaciones otorgadas",
  },
];

const Nosotros: FC = () => (
  <section id="us">
    <div className="justify-center gap-x-10 md:mx-20 md:flex">
      <div className="pt-10">
        <div className="px-5 py-3">
          <h1 className="text-xs font-bold uppercase text-slate-500">Sobre nosotros y servicios</h1>
        </div>

        <div className="mb-20 px-5">
          <h1 className="pb-2 text-4xl font-bold uppercase text-blue-900">
            Rapido y facil soluciones para tu casa u oficina
          </h1>
          <div className="max-w-2xl  pt-1 text-xl">
            Somos una empresa que brinda una experiencia de suscripción de servicio premium para el
            hogar que le ahorra tiempo y dinero.
          </div>
          <div className="py-10">
            <button
              onClick={() => {
                const form = document.getElementById("form");
                if (form === null) return;

                scrollIntoViewWithOffset(form, 150);
              }}
              type="button"
              className="rounded-md bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ¡Agenda una cita!
            </button>
          </div>
        </div>

        <div className="px-5 pt-14">
          <h1 className="pb-3 text-4xl font-bold uppercase text-blue-900">
            Calidad y compromiso con el cliente hablan por si solos
          </h1>
          <div className="max-w-2xl text-xl">
            Nuestra misión es dar el mejor servicio al alcance de su bolsillo. Nuestro compromiso es
            darle solución a sus necesidades estando a satisfacción.
          </div>
        </div>

        <div className="px-5 pt-14">
          <h1 className="pb-3 text-4xl font-bold uppercase text-blue-900">Servicio 24/7</h1>
          <div className="max-w-2xl text-xl">
            Si se encuentra en una situación de emergencia, no se preocupe. Brindamos servicio 24/7.
            Siempre que llames, te atendemos.
          </div>
        </div>

        <div className="px-5 pt-14">
          <h1 className="pb-3 text-4xl font-bold uppercase text-blue-900">¿Por qué elegirnos?</h1>
          <div className="max-w-2xl text-xl">
            Te damos el mejor servicio cuando lo necesites, todas las areas de la casa cubiertas no
            tendras que ir a ningun lugar más, con nosotros lo encuentras TODO. Somos la empresa
            antienvejecimiento de los hogares.
          </div>
        </div>

        <div className="mt-20">
          <Image src="/WomanFingersPointer.png" alt={"Picture"} width={920} height={1160} />
        </div>
      </div>

      <div className="m-10">
        <div className="px-5 py-3">
          <h1 className="text-4xl font-bold uppercase text-blue-900">Nuestros servicios</h1>
        </div>

        <div className="md:flex">
          <div className="flex-wrap">
            {pictures.map((picture) => (
              <div key={picture.id}>
                <Image
                  className="p-1"
                  src={picture.src1}
                  alt={"Picture"}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>

          <div className="flex-wrap">
            {pictures.map((picture) => (
              <div key={picture.id}>
                <Image
                  className="p-1"
                  src={picture.src2}
                  alt={"Picture"}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="m-10 grid w-auto grid-cols-2 items-center justify-center rounded-md bg-[#02044a] p-5 px-14 sm:min-w-0 md:flex md:flex-row md:justify-around">
      {pictures.map((picture) => (

        <div key={picture.id} className="my-5 justify-around gap-4 md:flex">
          <div className="flex h-12 w-12 items-center justify-center text-white sm:shrink-0">
            <picture.svg className="h-20 w-20" aria-hidden="true" />
          </div>

          <div className="text-lg text-white">
            <h1 className="text-lg font-bold">{picture.projects}</h1>
            <p>{picture.name}</p>
          </div>

        </div>
      ))}
    </div>
  </section>
);

export default Nosotros;

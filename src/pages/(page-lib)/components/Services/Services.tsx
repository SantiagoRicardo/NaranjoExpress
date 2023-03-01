import { type FC } from "react";
import { MdAutoAwesome } from "react-icons/md";
import {
  BoltIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  TrashIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

type Card = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svg: any;
  description: string;
  id: string;
  title: string;
};

const CARDS: Card[] = [
  {
    id: "card-1",
    title: "Mantenimiento del hogar",
    description:
      "Cuida tu domicilio con nuestro servicio de mantenimiento y conservación del hogar, plomeria, herreria, pintura y mucho más!.",
    svg: HomeModernIcon,
  },
  {
    id: "card-2",
    title: "Pulitura de pisos",
    description: "En granito y marmol.",
    svg: MdAutoAwesome,
  },
  {
    id: "card-3",
    title: "Remodelacion de infraestructura",
    description: "Obra civil y obra blanca",
    svg: BuildingOffice2Icon,
  },
  {
    id: "card-4",
    title: "Suministro eléctrico",
    description:
      "Sistemas integrados con mecanismos de control para Generar, transportar y distribuir energía.",
    svg: BoltIcon,
  },
  {
    id: "card-5",
    title: "Servicio de limpieza",
    description:
      "Lavado y aspirado de muebles, alfombras, eliminación de olores, abrillantado de pisos.",
    svg: TrashIcon,
  },
  {
    id: "card-6",
    title: "Carpintería",
    description:
      "Puertas, ventanas, parquets, tarimas, revestimientos, cocinas, armarios, y muebles a medida para baños, cocinas, dormitorios y salón, entre otros.",
    svg: WrenchScrewdriverIcon,
  },
];

const Services: FC = () => (
  <section id="services" className="bg-white py-24 sm:py-32 lg:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="sm:text-center">
        <h2 className="text-lg font-semibold leading-8 text-[#02044a]">¿Como funciona?</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¡Servicio a domicilio sin problemas, Todo lo que necesites!
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Llama para agendar tu reparación o mantenimiento con un servicio de naranjo express
        </p>
      </div>

      <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#02044a] text-white sm:shrink-0">
                <card.svg className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-900">{card.title}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;

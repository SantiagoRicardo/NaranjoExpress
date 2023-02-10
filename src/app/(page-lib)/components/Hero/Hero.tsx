import { type FC } from "react";
import Image from "next/image";

type Picture = {
  src: string;
  id: string;
  alt: string;
};

const pictures: Picture[] = [
  {
    id: "picture-1",
    src: "/ICT.png",
    alt: "Picture of the author",
  },
  {
    id: "picture-2",
    src: "/Record.png",
    alt: "Picture of the author",
  },
  {
    id: " picture-3",
    src: "/Grupo Empresarial Del Sinu.jpeg",
    alt: "Picture of the author",
  },
  {
    id: " picture-4",
    src: "/Constructivamente.png",
    alt: "Picture of the author",
  },
  {
    id: " picture-5",
    src: "/Certicar.png",
    alt: "Picture of the author",
  },
];

const Hero: FC = () => (
  <section className="relative">
    <div className="mx-20 justify-center md:flex">
      <div className="pt-10">
        <h1 className="p-5 text-xs font-bold uppercase text-slate-500">
          Servicios profesionales de alta calidad
        </h1>
        <h1 className="p-5 text-5xl font-bold uppercase text-blue-900">
          ¡Lo que tu hogar necesita a <span className="text-slate-500">solo un click!</span>
        </h1>
        <div className="max-w-2xl p-5 text-xl">
          Dejamos que nuestro trabajo de calidad y el compromiso con la satisfacción del cliente sea
          nuestro lema. Llamanos, los profesionales más completos en todo para tu hogar en
          reparaciones o mantenimientos con Naranjo Express
        </div>

        <div className="px-5 py-6">
          <button
            type="button"
            className="rounded-md bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ¡Cotíza!
          </button>
        </div>

        <div className="mt-24 hidden p-5 font-bold uppercase md:block">
          <div className="text-xl text-blue-800">Socios de confianza</div>
          <div className="py-2 text-3xl text-slate-500">Marcas que confian en nosotros</div>
        </div>
      </div>

      <div className="mt-5">
        <Image
          src="/ProfessionalElectrician.png"
          alt="Picture of the author"
          width={700}
          height={450}
        />
      </div>
    </div>
    <div className="mt-20 p-5 text-xl font-bold uppercase text-blue-800 md:hidden">
      Socios de confianza
    </div>
    <div className="flex items-center justify-around bg-[#E9EBEE] p-5 md:text-left">
      {pictures.map((picture) => (
        <div key={picture.id} className="p-5">
          <Image src={picture.src} alt={picture.alt} width={120} height={80} />
        </div>
      ))}
    </div>
  </section>
);
export default Hero;

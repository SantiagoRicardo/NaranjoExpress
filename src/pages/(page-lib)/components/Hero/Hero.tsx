import { type FC } from "react";
import Image from "next/image";
import { scrollIntoViewWithOffset } from "@/utils/dom";

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
    id: "picture-3",
    src: "/Red Empresarial Del Sinu.png",
    alt: "Picture of the author",
  },
  {
    id: "picture-4",
    src: "/Constructivamente.png",
    alt: "Picture of the author",
  },
  {
    id: "picture-5",
    src: "/Certicar.png",
    alt: "Picture of the author",
  },
  {
    id: "picture-6",
    src: "/Star Gold Group.png",
    alt: "Picture of the author",
  },
];
const Hero: FC = () => (
  <section id="home" className="relative">
    <div className="justify-center md:flex lg:mx-20">
      <div className="mt-10">
        <h1 className="text-center text-xs font-bold uppercase text-slate-500 md:ml-5 md:text-left">
          Servicios profesionales de alta calidad
        </h1>

        <h1 className="p-5 text-center text-2xl font-bold uppercase text-blue-900 md:text-left lg:text-5xl">
          ¡Lo que tu hogar necesita a <span className="text-slate-500">solo un click!</span>
        </h1>

        <div className="max-w-2xl p-5 lg:text-xl">
          Dejamos que nuestro trabajo de calidad y el compromiso con la satisfacción del cliente sea
          nuestro lema. Llamanos, los profesionales más completos en todo para tu hogar en
          reparaciones o mantenimientos con Naranjo Express
        </div>

        <div className="px-5 py-6">
          <button
            onClick={() => {
              const form = document.getElementById("form");
              if (form === null) return;

              scrollIntoViewWithOffset(form, 150);
            }}
            type="button"
            className="rounded-md bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            ¡Cotíza!
          </button>
        </div>

        <div className="mt-24 hidden p-5 font-bold uppercase md:block">
          <span className="text-xl text-blue-800">Socios de confianza</span>

          <span className="py-2 text-3xl text-slate-500">Marcas que confian en nosotros</span>
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

    <span className="mt-20 p-5 text-xl font-bold uppercase text-blue-800 md:hidden">
      Socios de confianza
    </span>

    <div className="grid grid-cols-2 items-center justify-center gap-2 bg-[#E9EBEE] p-5 md:flex md:flex-row md:justify-around md:text-left lg:px-12">
      {pictures.map((picture) => (
        <div key={picture.id}>
          <Image src={picture.src} alt={picture.alt} width={120} height={80} />
        </div>
      ))}
    </div>
  </section>
);
export default Hero;

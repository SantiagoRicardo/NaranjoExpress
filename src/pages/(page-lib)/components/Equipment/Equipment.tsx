import { type FC } from "react";
import Image from "next/image";

type Equipment = {
  src: string;
  id: string;
  alt: string;
};

const equipment: Equipment[] = [
  {
    id: "picture-1",
    src: "/Equipo 1.jpg",
    alt: "Equipo 1",
  },
  {
    id: "picture-2",
    src: "/Equipo 2.jpg",
    alt: "Equipo 2",
  },
  {
    id: "picture-3",
    src: "/Equipo 3.jpg",
    alt: "Equipo 3",
  },
  {
    id: "picture-4",
    src: "/Equipo 4.jpg",
    alt: "Equipo 4",
  },
  {
    id: "picture-5",
    src: "/Producto 1.jpg",
    alt: "Producto 1",
  },
  {
    id: "picture-6",
    src: "/Producto 2.jpg",
    alt: "Producto 2",
  },
  {
    id: "picture-7",
    src: "/Producto 3.jpg",
    alt: "Producto 3",
  },
  {
    id: "picture-7",
    src: "/Producto 4.jpg",
    alt: "Producto 4",
  },
];

const Equipment: FC = () => (
  <section id="equipments" className="relative">
    <div className="justify-center md:flex lg:mx-20">
      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-center text-lg font-semibold leading-8 text-[#02044a]">Herramientas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¡Equipamiento y Mas Servicios!
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            ¡Conoces las diferentes herramientas que utilizamos y más servicios!
          </p>

          <div className="m-5 md:grid md:grid-cols-2">
            {equipment.map((equipment) => (
              <div key={equipment.id} className="m-5">
                <Image src={equipment.src} alt={equipment.alt} width={700} height={700} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Equipment;

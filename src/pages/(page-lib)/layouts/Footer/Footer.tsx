import { scrollIntoViewWithOffset } from "@/utils/dom";
import Link from "next/link";
import { type FC } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

type Services = {
  id: string;
  services: string;
};

const Services: Services[] = [
  {
    id: "service-1",
    services: "Carpintería",
  },
  {
    id: "service-2",
    services: "Lavado de alfombras",
  },
  {
    id: " service-3",
    services: "Lavado de muebles",
  },
  {
    id: " service-4",
    services: "Obra civil",
  },
  {
    id: " service-5",
    services: "Obra blanca",
  },
  {
    id: " service-6",
    services: "Pulimiento de pisos",
  },
  {
    id: " service-7",
    services: "Pintura y restauración",
  },
  {
    id: " service-8",
    services: "Suministro eléctrico",
  },
];

const LINKS = [
  {
    name: "Inicio",
    href: "home"
  },
  {
    name: "Nosotros",
    href: "us"
  },
  {
    name: "Servicios",
    href: "services"
  },
  {
    name: "Equipos",
    href: "equipments"
  },
  {
    name: " Contáctanos",
    href: "form"  
  }
]

const Footer: FC = () => (
  <section>
    <footer className="bg-[#02044a] text-center text-white lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid justify-around gap-5 p-6 md:flex">
          <div className="pr-8">
            <h1 className="mb-4 inline-block whitespace-nowrap py-2 text-xl font-bold uppercase leading-relaxed text-blue-600">
              Naranjo <span className="text-yellow-500">Express</span>
            </h1>
            <p className="max-w-md">
              Contamos con mano de obra de alta calidad que se capacita cada año con tecnología de
              última generación. Desde la limpieza de pisos hasta la instalación de electricidad,
              existen muchos aspectos que requieren atención regular. Tomar medidas para mantener tu
              hogar en buen estado no solo mejora su apariencia, sino también su seguridad y
              funcionalidad.
            </p>
            <div className="mt-5 flex">
              <div className="mr-5">
                <a
                  href="https://www.instagram.com/solucionesnaranjoexpress/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="mb-2 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-3 text-white shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </button>
                </a>
              </div>

              <div className="mr-5 justify-center">
                <a href="https://www.facebook.com/grangelramirez" target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="mb-2 rounded-xl bg-blue-600 p-3 text-white shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </button>
                </a>
              </div>

              <div className="mr-5 justify-center">
                <a
                  href="https://wa.me/573042026189?text=Hola,%20Naranjo%20Express,%20Necesito%20Una%20Cotización!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="mb-2 rounded-xl bg-[#25D366] p-3 text-white shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </button>
                </a>
              </div>

              <div className="mr-5 justify-center">
                <a href="https://github.com/SantiagoRicardo" target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="mb-2 rounded-xl bg-white p-3 text-black shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  >
                    <FaGithub className="h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-lg font-bold text-white">Servicios</h1>
            <div className="mt-3 text-base text-slate-500">
              <ol>
                {Services.map((Services) => (
                  <li key={Services.id} className="mb-4 hover:text-white">
                    {Services.services}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="">
            <h1 className="text-lg font-bold text-white">Enlaces utiles</h1>
            <div className="mt-3 text-base text-slate-500">
              <ol>
              {LINKS.map((links) => (
                  <li key={links.name} className="mb-4 hover:text-white">
                  <button
                      onClick={() => {
                        const scroll = document.getElementById(links.href);
                        if (scroll === null) return;

                        scrollIntoViewWithOffset(scroll, 150);
                      }}
                      type="button"
                    >
                      {links.name}
                    </button>
                  </li>
                ))}
                <Link
                  className="text-slate-500 hover:text-white"
                  target="_blank"
                  href="https://drive.google.com/file/d/1DU1KMIuyDcVh6pf1gWAkx0P_TCWKF10U/view?usp=sharing"
                >
                  Portafolio
                </Link>
              </ol>
            </div>
          </div>
          <div className="">
            <h1 className="mb-4 text-lg font-bold text-white">Contacto</h1>
            <p className="mb-4 flex items-center justify-center text-slate-500 md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              Montería, Córdoba, Colombia
            </p>
            <p className="mb-4 flex items-center justify-center text-slate-500 md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              naranjoexpress27@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center text-slate-500 md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              +57-304-202-6189
            </p>
            <p className="flex items-center justify-center text-slate-500 md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                ></path>
              </svg>
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 border-t border-indigo-500">
        <div className="p-5 text-center text-base text-white">
          © 2023 Naranjo Express Inc. Todos los derechos reservados
        </div>
      </div>
    </footer>
  </section>
);

export default Footer;

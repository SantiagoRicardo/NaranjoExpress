"use client";

import { type FC } from "react";
import Image from "next/image";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const Form: FC = () => (
  <section>
      <div className="justify-center md:flex">
        <div className="flex-col px-16 md:justify-center">
          <div className="justify-around">
            <h1 className="mb-4 text-3xl font-bold text-blue-900">Consigue una cotización</h1>
            <p className="max-w-[20rem] text-lg font-semibold leading-8 text-blue-900">
              Complete el formulario y nuestro equipo se comunicará con usted dentro de las 24
              horas.
            </p>
          </div>

          <div className="my-12 gap-4 font-semibold text-blue-900">
            <div className="flex gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm">
              <a href="tel:+57-304-202-6189" className="flex items-center"><FaPhone className="mx-3"/>+57-304-202-6189</a>
            </div>
            <div className="flex gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm">
              <a href="mailto:naranjoexpress27@gmail.com" className="flex items-center"><FaEnvelope className="mx-3"/>naranjoexpress27@gmail.com</a>
            </div>
            <div className="flex gap-2 rounded p-4 hover:bg-[#030d59] hover:text-white hover:shadow-sm">
              <a href="https://goo.gl/maps/Hc6nVUBPKF2V24T86" className="flex items-center" target="_blank" rel="noreferrer">
              <FaMap className="mx-3"/>Montería, Córdoba
              </a>
            </div>
          </div>

          <div className="-mx-10">
            <Image
              src="/naranjo-express-transparent.png"
              alt={"Picture"}
              width={300}
              height={300}
            />
          </div>
        </div>

        <div>
          <form className="mx-10 mb-5 flex-col rounded-lg bg-[#02044a] py-9 px-5 text-white shadow-xl md:w-full">
            <h2 className="mb-10 text-center text-3xl font-black text-amber-400">Contáctanos</h2>
            <div className="mb-5">
              <label className="flex">Su Nombre</label>
              <input
                placeholder="ejemplo: Oscar Perez Gomez"
                className="mt-2 w-full rounded-md border-2 p-3 text-blue-900 placeholder:text-gray-400"
              />
            </div>

            <div className="mb-5">
              <label className="flex flex-col">Correo</label>
              <input
                placeholder="email@domain.com"
                className="mt-2 w-full rounded-md border-2 p-3 text-blue-900 placeholder:text-gray-400"
              />
            </div>

            <div className="mb-5">
              <label className="flex flex-col">Mensaje</label>
              <textarea
                placeholder="Mensaje"
                className="mt-2 h-48 w-full rounded-md border-2 p-3 text-blue-900"
              />
            </div>

            <button
              type="submit"
              className="my-2 self-end rounded-md bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
);

export default Form;

import { type FC, useState } from "react";
import Link from "next/link";
import cs from "@/utils/cs";
import { PAGES } from "@/layouts/Navbar/lib";

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3  mb-3 fixed w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white text-blue-700"
              href="/"
            >
              Naranjo{" "}
              <span className="text-yellow-400">Express</span>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={cs("lg:flex flex-grow items-center", navbarOpen ? "flex" : "hidden")}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {PAGES.map((page) => (
                <li className="ml-2 text-black text-xl" key={page.name}>
                  <Link href={page.href}>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import { type FC, useState } from "react";
import Link from "next/link";
import cs from "@/utils/cs";
import { PAGES } from "@/layouts/Navbar/lib";

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 mb-3 w-full items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link
            className="mr-4 inline-block whitespace-nowrap py-2 text-xl font-bold uppercase leading-relaxed text-blue-700"
            href="/"
          >
            Naranjo <span className="text-yellow-400">Express</span>
          </Link>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className={cs("flex-grow items-center lg:flex", navbarOpen ? "flex" : "hidden")}>
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            {PAGES.map((page) => (
              <li className="ml-2 text-xl text-black" key={page.name}>
                <Link href={page.href}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

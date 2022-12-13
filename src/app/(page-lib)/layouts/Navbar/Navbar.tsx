"use client";

import { type FC, useState } from "react";
import Link from "next/link";
import cs from "@/utils/cs";
import { PAGES } from "./lib";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 mb-3 w-full items-center justify-between px-2 py-3 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link
            className="mr-4 inline-block whitespace-nowrap py-2 text-xl font-bold uppercase leading-relaxed text-blue-700"
            href="/"
          >
            Naranjo <span className="text-yellow-400">Express</span>
          </Link>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Bars3Icon className="h-6 w-6" />
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

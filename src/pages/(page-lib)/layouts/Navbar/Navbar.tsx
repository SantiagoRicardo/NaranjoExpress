import { type FC, useState } from "react";
import Link from "next/link";
import cs from "@/utils/cs";
import { PAGES } from "./lib";
import { Bars3Icon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { Transition } from "@headlessui/react";
import { scrollIntoViewWithOffset } from "@/utils/dom";

const Navbar: FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 mb-3 w-full bg-white/90 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between px-8 py-3 lg:px-12">
          <div className="flex items-center lg:gap-4">
            <Link
              className="mr-4 inline-block whitespace-nowrap py-2 text-xl font-bold uppercase leading-relaxed text-blue-700"
              href="/"
            >
              Naranjo <span className="text-yellow-500">Express</span>
            </Link>

            <div className={cs("hidden border-l-2 pl-4 lg:flex")}>
              <ul className="flex list-none flex-col gap-4 font-medium lg:ml-auto lg:flex-row">
                {PAGES.map((page) => (
                  <li
                    className={cs(
                      "ml-2 hover:text-neutral-800",
                      page.href === window.location.pathname
                        ? "font-bold text-neutral-800"
                        : "text-neutral-500"
                    )}
                    key={page.name}
                  >
                    <Link href={page.href}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => {
                setIsNavbarOpen(!isNavbarOpen);
              }}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            <button
              onClick={() => {
                const form = document.getElementById("form");
                if (form === null) return;

                scrollIntoViewWithOffset(form, 150);
              }}
              type="button"
              className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:inline"
            >
              Contáctanos
            </button>
          </div>
        </div>

        <Transition
          show={isNavbarOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute inset-0 z-40 min-h-screen bg-white/95 backdrop-blur">
            <ul className="mt-12 flex h-full list-none flex-col text-center">
              {PAGES.map((page) => (
                <li
                  className={cs(
                    "my-2 hover:text-neutral-800",
                    page.href === window.location.pathname
                      ? "font-bold text-neutral-800"
                      : "text-neutral-500"
                  )}
                  key={page.name}
                >
                  <Link href={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

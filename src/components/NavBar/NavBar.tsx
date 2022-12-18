import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown(name: string, link: string) {
  return (
    <Link href={link}>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {name}
          </a>
        )}
      </Menu.Item>
    </Link>
  );
}

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <nav className="h-20 w-full bg-green-500 px-2 py-4 fixed z-30">
        <div className="container flex flex-wrap justify-between mx-auto">
          <Link href="/">
            <h1 className="flex font-large text-2xl text-gray-900">
              Math Toolbox
            </h1>
          </Link>
          {showSidebar ? (
            <button
              className="flex text-4xl text-black cursor-pointer z-60 pr-5"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              x
            </button>
          ) : (
              <svg
                onClick={() => setShowSidebar(!showSidebar)}
                className="z-60 inline-flex items-center cursor-pointer pu-5 pr-5"
                fill="ffffff"
                viewBox="0 0 100 80"
                width="60"
                height="60"
              >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
          )}
        </div>
      </nav>
      {/* Sidebar contents */}
      <div
        className={`top-0 right-0 w-full md:w-[30vw] bg-green-600  p-10 pl-5 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <nav>
          <ul className="mt-4">
            <Link href="/">
              {/* None dropdown */}
              <li className="py-2">
                <button
                  className="bg-white w-[90%] text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
            </Link>
            {/* Dropdown */}
            <li className="py-2">
              <Menu
                as="div"
                className="relative inline-block text-left w-[90%]"
              >
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Discrete Math & Logic
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {Dropdown(
                        "Number Base Converter",
                        "/tools/number-base-converter"
                      )}
                      {Dropdown("Boolean Algebra", "/tools/boolean-algebra")}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="py-2">
              <Menu
                as="div"
                className="relative inline-block text-left w-[90%]"
              >
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Set Theory
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {Dropdown(
                        "Power Set Calculator",
                        "/tools/power-set-calculator"
                      )}
                      {Dropdown(
                        "Cartesian Product Calculator",
                        "/tools/cartesian-product-calculator"
                      )}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <Link href="/about">
            <li className="py-2">
              <button
                className="bg-white w-[90%] text-gray-700 px-3 py-2 rounded-md font-medium text-sm"
                aria-current="page"
              >
               About 
              </button>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

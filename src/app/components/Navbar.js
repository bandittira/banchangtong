"use client";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { HiBars2 } from "react-icons/hi2";

export default function Navbar() {
  const dropdown = useRef();

  const [ishidden, setishidden] = useState(true);

  function onclickhandle() {
    setishidden(!ishidden);
  }

  return (
    <nav className="bg-transparent border-b border-gray-100 border-opacity-50 justify-center items-center text-white absolute top-0 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-center">
          <a href="#">
            <p className="text-3xl font-lora">Banchangtong.</p>
          </a>
        </div>

        <div>
          <button onClick={onclickhandle}>
            <HiBars2 className="visible sm:invisible" size={"1.8rem"} />
          </button>
        </div>

        {!ishidden && (
          <div
            id="dropdown"
            ref={dropdown}
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="flex sm:visible md:visible lg:visible xl:visible invisible overflow-hidden h-12 font-inter text-white items-center justify-center text-base/4">
          <a href="#">
            <p className="ml-4 mr-4 hover:underline hover:underline-offset-4">
              Home
            </p>
          </a>
          <a href="#">
            <p className="ml-4 mr-4 hover:underline hover:underline-offset-4 flex items-center">
              Shop <FiChevronDown className="mt-1 ml-1" size={"0.9rem"} />
            </p>
          </a>
          <a href="#">
            <p className="ml-4 mr-4 hover:underline hover:underline-offset-4">
              Customize
            </p>
          </a>
          <a href="#">
            <p className="ml-4 mr-4 hover:underline hover:underline-offset-4">
              About Us
            </p>
          </a>
          <a href="#">
            <p className="ml-4 mr-4 hover:underline hover:underline-offset-4 flex items-center">
              Blog <FiChevronDown className="mt-1 ml-1" size={"0.9rem"} />
            </p>
          </a>
        </div>

        <div className="flex overflow-hidden justify-end">
          <div className="border border-white bg-gray-700 bg-opacity-10 rounded-full sm:w-64 w-96 h-10 text-center flex items-center justify-evenly">
            <input
              type="text"
              id="search"
              className="bg-transparent border-none text-white text-sm w-48 focus:border-blue-500 block outline-none font-inter placeholder-white"
              placeholder={"Search products..."}
            ></input>

            <p>
              <CiSearch className="fill-white" size={"1.5rem"} />
            </p>
          </div>

          <button className="items-center justify-evenly mt-2 ml-6">
            <FiUser size={"1.5rem"} />
          </button>

          <button className="items-center justify-evenly mt-2 ml-6">
            <FiShoppingBag size={"1.5rem"} />
          </button>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../src/assets/images/logo.svg";

function Jobportailheader() {
  const [navbar, Setnavbar] = useState(true);
 
  return (
    <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b shadow-sm ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img src={Logo} class="h-8 mr-3" alt="Flowbite Logo" />
        </a>

        <div class="flex md:order-1 gap-4 ">
          {/* <span className="text-blue-800">{AccessAlarm}</span> */}
          <Link to={"/sign "}>
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800"
            >
              Post new job
            </button>
          </Link>
          <Link to={"/find "}>
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800"
            >
              Find New job
            </button>
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark rounded-lg md:hidden hover:bg-light_gray focus:outline-none focus:ring-2 focus:ring-light_gray dark:text-dark dark:hover:bg-light_gray dark:focus:ring-light_gray"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => Setnavbar(!navbar)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            navbar ? "hidden " : ""
          } items-center justify-between  w-full md:flex md:w-auto md:order-2 `}
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white items-center justify-center">
            <li>
              <NavLink
                to="/"
                class="block py-2 pl-2 pr-4 text-dark rounded hover:bg-light_gray md:hover:bg-transparent md:hover:text-primary md:p-0  md:text-primary md:dark:hover:text-primary dark:text-white dark:hover:bg-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-dark"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                class="block py-2 pl-3 pr-4 text-dark rounded hover:bg-light_gray md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-dark dark:hover:text-white md:dark:hover:bg-transparent dark:border-dark"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link to={"/login"}>
                <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-1 px-4 border border-secondary hover:border-transparent rounded">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Jobportailheader;

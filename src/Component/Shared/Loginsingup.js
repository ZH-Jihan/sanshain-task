import React from "react";
import { Link } from "react-router-dom";

const Loginsingup = () => {
  return (
    <div>
      <div class="relative min-h-screen  grid bg-black ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div class="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative">
            <div class="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div class="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div class=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">
                <img src="" alt="" srcset="" />
              </div>
            </div>
          </div>
          <div class="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2   md:p-10 lg:p-8 sm:rounded-lg md:rounded-none ">
            <div class="max-w-xl w-full space-y-12">
              <div class="lg:text-left text-center">
                <h2 class="mt-6  font-bold text-gray-100">
                  <svg
                    viewBox="0 0 24 24"
                    class="h-10 w-auto inline"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                  </svg>
                </h2>
                <h2 class="mt-6 text-7xl font-bold text-gray-100">
                  Happening now
                </h2>
                <p class="mt-10 text-4xl text-gray-200">Join Twitter today.</p>
              </div>
              <div>
                <a href="/registar">
                <button
                  type="submit"
                  class="lg:w-3/5 w-full flex justify-center text-gray-100 p-4   rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg bg-indigo-600 cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </button>
                </a>
              </div>
              <div>
                <Link to="/login">
                <button
                  type="submit"
                  class="lg:w-3/5 w-full flex justify-center border-indigo-600 bg-transparent text-gray-100 p-4 border rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Log in
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsingup;

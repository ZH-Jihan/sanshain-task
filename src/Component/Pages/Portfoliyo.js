import React from "react";
import img from '../../assets/images/IMG20211213222535.jpg';
import site1 from '../../assets/images/Screenshot (31).png';
import site2 from '../../assets/images/Screenshot (32).png';
const Portfoliyo = () => {
  return (
    <div>
      <header class="max-h-full bg-white p-6 grid">
        <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-8 items-center">
          <div class="grid justify-center items-center order-1 col-span-1">
            <img
              class="lg:h-80 md:h-64 h-40 rounded-full"
              src={img}
              alt=""
            />
          </div>
          <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
              Hi, I am Zakir Hossain
            </h1>
            <p class="text-xl text-gray-800 text-center md:text-left">
            I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!
            </p>
            <a  href="https://www.linkedin.com/in/zakir-hossain-b13907229/" target="_blank" rel="noreferrer">
                  <button className="block mt-8 mx-auto md:mx-0 text-lg py-2 px-6 text-red-50 font-semibold rounded bg-red-400">Contact With Me</button>
                </a>
          </div>
        </div>
      </header>

      {/* Main  */}
      <div class="md:gap-4 p-6 bg-blue-50 md:grid">
        <div class="grid grid-cols-2 justify-between lg:px-40 ">
          <h1 class="justify-start md:text-left text-2xl">My Recent Work</h1>
          <p class="hidden md:block text-right text-2xl"></p>
        </div>
        <div class="md:grid grid-cols-2 gap-6 lg:px-40">
          <div>
            <div class="bg-white p-4">
              <div>
                <div class="mb-4">
                  <p>Project No : 1</p>
                  <h1 class="text-2xl font-bold text-gray-700">
                  Aaron Williamson Fitness Club
                  </h1>
                </div>
                <div class="">
                  <img src={site1} alt="" />
                </div>
                <a  href="https://fitness-hub-fc5c9.web.app/" target="_blank" rel="noreferrer">
                  <button className="block mt-8 mx-auto md:mx-0 text-lg py-2 px-6 text-red-50 font-semibold rounded bg-red-400">Explor This Site</button>
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 md:mt-0 mt-6">
            <div>
              <div class="mb-4">
              <p>Project No : 2</p>
                <h1 class="text-2xl font-bold text-gray-700">
                  Farniture Bari 
                </h1>
              </div>

              <div class="">
              <img src={site2} alt="" />
              </div>
              <a  href="https://furneture-c6e31.web.app/" target="_blank" rel="noreferrer">
                  <button className="block mt-8 mx-auto md:mx-0 text-lg py-2 px-6 text-red-50 font-semibold rounded bg-red-400">Explor This Site</button>
                </a>
            </div>
          </div>
        </div>

        {/* <div class="mt-6 p-4 bg-white px-6">
          <div class="border-b pb-6">
            <h1 class="mt-2 mb-6 text-center text-xl">Featured works</h1>
            <div class="md:grid grid-cols-2 gap-6">
              <div>
                <img
                  class="md:h-full object-cover"
                  src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9"
                  alt=""
                />
              </div>
              <div>
                <h1 class="my-6 text-2xl font-bold text-gray-700">
                  Designing Dashboards
                </h1>
                <span class="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">
                  2020
                </span>
                <spnan class="text-lg">Dashboard</spnan>
                <p class="mt-6 text-lg text-gray-700">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <footer class="bg-white">
        <div class="flex mt-20 px-10 items-center justify-around max-md">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 text-gray-800 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 textgray-800e w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 text-gray-800 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 text-gray-800 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <p class="text-center my-10 text-lg">
          Copyright ©2020 All rights reserved Zakir Hossain
        </p>
      </footer>
    </div>
  );
};

export default Portfoliyo;

import React from "react";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";

function Connect() {
  return (
    <div
      id="id4"
      className="border-white rounded-2xl border-2 backdrop-blur-3xl mx-3 mt-5 mb-10 md:mt-16 md:mx-28"
    >
      <div className="flex flex-row md:mx-12 mx-5 mt-8 md:mt-10 items-center">
        <div className="text-white font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
          Connect
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-11 w-11 md:h-14 md-14 text-blue-800 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
      </div>
      <hr className="my-2 border-white mx-6 md:mx-14"></hr>
      <div className="md:flex md:flex-row mx-2 mt-5 md:mt-0 mb-8 md:mx-12 md:overflow-x-auto  ">
        <a
          className="md:basis-1/4"
          href="https://gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border-2 border-blue-700 flex md:flex-col md:rounded-xl rounded-full m-2 bg-blue-300 items-center justify-center duration-500 hover:bg-blue-400 text-ellipsis overflow-hidden">
            <img
              loading="lazy"
              className="h-12 w-12 my-3 md:h-16 md:w-16 md:mx-auto ml-6"
              src={gmail}
              alt="gmail"
            />
            <div className="text-left md:text-center my-3 tracking-tight">
              <p className="font-bold text-xl font-rubik mx-3 md">G-Mail</p>
              <p className="font-rubik mx-3">swarupsaofficial@gmail.com</p>
            </div>
          </div>
        </a>
        <a
          className="md:basis-1/4"
          href="https://github.com/NyanCyanide"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border-2 border-slate-600 flex flex-row-reverse md:flex-col md:rounded-xl rounded-full m-2 justify-center items-center duration-500 bg-black hover:bg-zinc-800 text-ellipsis overflow-hidden">
            <img
              className="h-12 w-12 my-3 md:h-16 md:w-16 mr-2 md:mx-auto border-white border-2 rounded-full"
              src={github}
              alt="github"
            />
            <div className="text-right md:text-center tracking-tighter my-3 font-rubik text-white">
              <p className=" font-bold mx-3 text-xl font-rubik">Github</p>
              <p className=" mx-3">github.com/NyanCyanide</p>
            </div>
          </div>
        </a>
        <a
          rel="noreferrer"
          className="md:basis-1/4"
          href="https://www.linkedin.com/in/hari-om-swarup-s-a-15240323a/"
          target="_blank"
        >
          <div className="border-2 border-sky-800 flex rounded-full md:flex-col md:rounded-xl m-2 bg-sky-600 justify-center items-center hover:bg-sky-700 duration-500 text-ellipsis overflow-hidden">
            <img
              className="h-12 w-12 my-3 md:h-16 md:w-16 ml-6 md:mx-auto rounded-full border-2 border-white"
              src={linkedin}
              alt="linkedin"
            />
            <div className="text-left md:text-center my-3 tracking-tighter text-white">
              <p className="font-bold text-xl font-rubik mx-3">Linked In</p>
              <p className="font-rubik mx-3">linkedin.com/hariomswarupsa</p>
            </div>
          </div>
        </a>
        <a
          rel="noreferrer"
          className="md:basis-1/4"
          href="https://instagram.com/_bxtrm_frost_/"
          target="_blank"
        >
          <div className="border-2 border-orange-700 flex flex-row-reverse md:flex-col md:rounded-xl rounded-full m-2 justify-center items-center duration-500 bg-pink-400 hover:bg-pink-500 text-ellipsis overflow-hidden">
            <img
              className="h-12 w-12 my-3 md:h-16 md:w-16 mr-2"
              src={instagram}
              alt="gmail"
            />
            <div className="md:text-center text-right tracking-tighter my-3 font-rubik ">
              <p className=" font-bold mx-3 text-xl font-rubik">Instagram</p>
              <p className=" mx-3">instagram.com/_bxtrm_frost_</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Connect;

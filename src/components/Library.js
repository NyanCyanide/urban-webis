import React from "react";
import Contentb from "./Contentb"
import Contentp from "./Contentp";


function Library() {
  return (
    <div
      id="id3"
      className="backdrop-blur-none rounded-2xl border-2 mx-3 mt-5 md:mt-16 md:mx-28 glasseffect "
    >
      <div className="flex flex-row md:mx-12 mx-5 mt-8 md:mt-10 items-center">
        <div className="text-white font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
          Library
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-11 w-11 md:h-14 md:w-14 text-yellow-400 mx-auto "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </div>
      </div>
      <hr className="my-2 border-white mx-6 md:mx-14"></hr>
      <Contentb/>
      <Contentp/>
    </div>
    
  );
}

export default Library;

import React from "react";
import MediaQuery from "react-responsive";
import profile from "../images/my-profile.PNG";

function Header() {
  return (
    <>
      <MediaQuery query="(max-width: 767px)">
        <div className="select-none font-mono flex flex-row backdrop-blur-sm fixed w-screen bottom-0 py-1 rounded-t-xl items-center border-t-2 border-slate-700">
          <div className="basis-1/4 text-center rounded-full hover:bg-zinc-800 cursor-pointer ease-linear duration-700">
            <a href="/home"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-red-700 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className=" text-white">Home</span></a>
          </div>
          <div className="basis-1/4 text-center rounded-full hover:bg-zinc-800 cursor-pointer ease-linear duration-700 ">
            <a href="/about"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-cyan-600 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg></a>
            <span className="text-white">About</span>
          </div>
          <div className="basis-1/4 text-center rounded-full hover:bg-zinc-800 cursor-pointer ease-linear duration-700">
            <a href="/library"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-yellow-400 mx-auto "
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
            <span className="text-white">Library</span></a>
          </div>
          <div className="basis-1/4 text-center rounded-full hover:bg-zinc-800 cursor-pointer ease-linear duration-700">
            <a href="/connect"><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-blue-800 mx-auto"
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
            <span className="text-white">Connect</span></a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div className="flex border-b-2 border-zinc-800 flex-row w-full  backdrop-blur-sm justify-self-center rounded-b-xl">
          <div className="flex  justify-center basis-2/6 items-center py-2 select-none">
            <img className="w-14 h-14" src={profile} alt="my-pic" />
            <div className="text-white text-2xl font-bold font-mono">Hari Om Swarup S A</div>
          </div>
          <div className="flex justify-end  basis-4/6 items-center mr-5">
            <div className="cursor-pointer text-white font-mono mx-2 px-5 text-xl ease-linear duration-500 hover:rounded-full hover:bg-red-700 hover:text-black"><a href="/home">Home</a></div>
            <div className="cursor-pointer text-white font-mono mx-2 px-5 text-xl ease-linear duration-500 hover:rounded-full hover:bg-cyan-600 hover:text-black"><a href="/about">About</a></div>
            <div className="cursor-pointer text-white font-mono mx-2 px-5 text-xl ease-linear duration-500 hover:rounded-full hover:bg-yellow-400 hover:text-black"><a href="/library">Library</a></div>
            <div className="cursor-pointer text-white font-mono mx-2 px-5 text-xl ease-linear duration-500 hover:rounded-full hover:bg-blue-800 hover:text-black"><a href="/connect">Connect</a></div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Header;

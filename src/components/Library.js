import React from "react";
import Imagecardy from "./Imagecard";
import Content from "./Content"
import blenderart1 from "../images/blenderart1.png";
import blenderart2 from "../images/blenderart2.png";
import blenderart3 from "../images/blenderart3.png";
import blenderart4 from "../images/blenderart4.png";
import blenderart5 from "../images/blenderart5.png";

function Library() {
  return (
    <div
      id="id3"
      className="backdrop-blur-none rounded-2xl border-2  bg-white mx-3 mt-5 md:mt-16 md:mx-28 "
    >
      <div className="flex flex-row md:mx-12 mx-5 mt-8 md:mt-10 items-center">
        <div className="text-black font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
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
      <hr className="my-2 border-black mx-6 md:mx-14"></hr>
      <Content/>
      <div className="mx-5 md:mx-14  pt-2">
        <p className="font-roboto tracking-tight font-bold text-2xl underline underline-offset-4">
          Blender Art
        </p>
        <p className="font-roboto text-left leading-5 py-3 ">
          Blender is a free and open-source 3D creation suite. it supports the
          entirety of the 3D pipeline - modelling, rigging, animation,
          simulation, rendering, compositing and motion tracking, and video
          editing.
        </p>
        <div className="grid gap-y-6 md:max-w-none md:grid-cols-3 md:gap-6">
          <Imagecardy
            image={blenderart1}
            alt="blender-art-1"
            title={"Abstract Cube Art"}
            content={"Geometry Nodes Abstract Model & Environment in Blender"}
          />
          <Imagecardy
            image={blenderart2}
            alt="blender-art-2"
            title={"Spinning Lightning Art"}
            content={"Abstract Tentacle Animation in Eevee Blender"}
          />
          <Imagecardy
            image={blenderart3}
            alt="blender-art-3"
            title={"Last Hope Space Man"}
            content={
              "An Easy Blender Envirnoment Design, related to space theme"
            }
          />
          <Imagecardy
            image={blenderart4}
            alt="blender-art-4"
            title={"Dance Art"}
            content={"Easy Stylized Characters Dancing animation Loop in Eevee"}
          />
          <Imagecardy
            image={blenderart5}
            alt="blender-art-5"
            title={"Heat Waves - Wave Sync"}
            content={
              "Audio Visualizer, similar to Trap Nation, with Heat Waves Music"
            }
          />
        </div>
      </div>
    </div>
    
  );
}

export default Library;

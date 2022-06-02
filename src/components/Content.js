import React from 'react'
import Imagecardb from "./Imagecardb";
import blenderart1 from "../images/blenderart1.png";
import blenderart2 from "../images/blenderart2.png";
import blenderart3 from "../images/blenderart3.png";
import blenderart4 from "../images/blenderart4.png";
import blenderart5 from "../images/blenderart5.png";

function Content() {
  return (
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
        <div className="grid gap-y-6 md:grid-rows-1 md:overflow-x-auto md:grid-cols-3 md:gap-6">
          <Imagecardb
            image={blenderart1}
            alt="blender-art-1"
            title={"Abstract Cube Art"}
            content={"Geometry Nodes Abstract Model & Environment in Blender"}
            link={"https://drive.google.com/file/d/1zGFLSeyWvwaZeywFoPpqCdqMeCXA9evt/view?usp=sharing"}
            action={""}
          />
          <Imagecardb
            image={blenderart2}
            alt="blender-art-2"
            title={"Spinning Lightning Art"}
            content={"Abstract Tentacle Animation in Eevee Blender thats wonderful"}
            link={"https://drive.google.com/file/d/1lbmQ_P1w-nOFRlXDcIqFrn9uZ1KEXtIi/view?usp=sharing"}
            action={""}
          />
          <Imagecardb
            image={blenderart4}
            alt="blender-art-4"
            title={"Last Hope Space Man"}
            content={
              "An Easy Blender Envirnoment Design, related to space theme"
            }
            link={"https://drive.google.com/file/d/15mIwR7XyCAod7uB_N9Xbux2yeDYTXBBa/view?usp=sharing"}
            action={""}
          />
          <Imagecardb
            image={blenderart3}
            alt="blender-art-3"
            title={"Dance Art"}
            content={"Easy Stylized Characters Dancing animation Loop in Eevee"}
            link={"https://drive.google.com/file/d/1MlQ2KdWfG1THTladL2Qmhx-mLxnz4BNH/view?usp=sharing"}
            action={""}
          />
          <Imagecardb
            image={blenderart5}
            alt="blender-art-5"
            title={"Heat Waves - Wave Sync"}
            content={
              "Audio Visualizer, similar to Trap Nation, with Heat Waves Music"
            }
            link={"https://drive.google.com/file/d/1hukrJVsYfXO_DAL6JGFZI9lqg5RUbK6a/view?usp=sharing"}
            action={""}
          />
        </div>
      </div>
  )
}

export default Content
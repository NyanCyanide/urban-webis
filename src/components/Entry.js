import React from "react";
import img from "../images/image1.png";
import MediaQuery from "react-responsive";

function Entry() {
  return (
    <>
      <MediaQuery query="(max-width: 767px)">
        <div id="id1" className="flex text-white justify-between mt-14 items-center">
          <img
            className="mx-auto w-1/3 bg-white grayscale rounded-3xl "
            src={img}
            alt="my-pic"
          />
          <div className="mx-auto font-mono pl-1 tracking-tighter backdrop-blur-none">
            <div className="font-bold tracking-tighter text-xl mt-2">
              Hari Om Swarup S A
            </div>
            <div className="font-bold text-sm tracking-tighter">
              I'm a Self Believer 💖
            </div>
            <div className="mt-5">
              <span className="text-yellow-400 font-bold">Student </span>
              <a
                href="https://pes.edu/"
                target="_blank"
                className="text-cyan-400"
              >
                @PES univeristy
              </a>
            </div>
            <div className="font-semibold text-yellow-400">
              Computer Science{" "}
            </div>
            <div className="font-semibold text-yellow-400">
              5th Semester, 3rd Year
            </div>
            <div className="mt-5">
              <span className="uppercase font-semibold">Age: </span>19
            </div>
            <div>
              <span className="uppercase font-semibold">Location:</span> India
            </div>
          </div>
        </div>
        <div className="font-mono text-white text-center mx-6 mt-20 ">
          <p className="text-4xl font-bold">Hello World!👋</p>
          <p className="text-justify mt-5 tracking-wider text-lg">
            Welcome to my webiste. I am an undergraduate student pursuing
            Computer Science Engineering. Passionate about Software, Computers,
            and technology.
          </p>
        </div>
        
      </MediaQuery>
      <MediaQuery query="(min-width: 768px)">
        <div id="id1" className="flex text-white flex-row mt-48 tracking-tight justify-center items-center backdrop-blur-none">
          <div className="basis-1/2 font-mono text-left pr-10 pl-14">
            <p className="text-6xl">Hello World!👋</p>
            <p className="text-justify">
              Welcome to my webiste. I am an undergraduate student pursuing
              Computer Science Engineering. Passionate about Software,
              Computers, and technology.
            </p>
          </div>
          <div className="basis-1/4 px-4 font-mono text-right">
            <div className="text-4xl font-bold">Hari Om Swarup S A</div>
            <div className="text-xl">I'm a Self Believer 💖</div>
            <div className="mt-5 text-lg">
              <span className="text-yellow-400 font-bold">Student </span>
              <a
                href="https://pes.edu/"
                target="_blank"
                className="text-cyan-400"
              >
                @PES univeristy
              </a>
            </div>
            <div className="font-semibold text-lg text-yellow-400">
              Computer Science
            </div>
            <div className="font-semibold text-lg text-yellow-400">
              5th Semester, 3rd Year
            </div>
            <div className="mt-5 text-lg">
              <span className="uppercase font-semibold">Age: </span>19
            </div>
            <div className=" text-lg">
              <span className="uppercase font-semibold">Location:</span> India
            </div>
          </div>
          <div className="basis-1/4 overflow-hidden ">
            <img
              className="grayscale w-2/3 bg-white rounded-3xl hover:rounded-none duration-700 scale-100 hover:scale-105"
              src={img}
              alt="my image"
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default Entry;

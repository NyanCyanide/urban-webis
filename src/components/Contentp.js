import React from 'react'
import Imagecardy from "./Imagecard";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";


function Contentp() {
  return (
    <div className="mx-5 md:mx-14 mt-5 mb-6 md:mb-10 pt-2 bg-yellow-100 border-2 border-yellow-600 rounded-2xl">
      <div className='mx-2 md:mx-5 mt-2 '>
        <p className="font-roboto tracking-tight font-bold text-2xl underline underline-offset-4">
          Projects
        </p>
        <p className="font-roboto text-left leading-5 py-3 ">
          These are some of my projects down here from the start of my coding journey, please feel free to check them out.
        </p>
        <div className="grid gap-y-6 md:max-w-none md:grid-cols-3 md:gap-6 ">
          <Imagecardy
            image={project1}
            alt="project-1"
            title={"Shooting Game"}
            content={"A simple shooting game made from pygame module, give it a try!, and score high"}
            link={"https://github.com/NyanCyanide/Shooting-Game"}
            action={"On Repo"}
          />
          <Imagecardy
            image={project2}
            alt="project-2"
            title={"Wumpus World"}
            content={"A game that illustrates the worth of a knowledge-based agent to represent knowledge"}
            link={"https://github.com/NyanCyanide/Wumpus-World"}
            action={"On Repo"}
          />
          <Imagecardy
            image={project3}
            alt="project-3"
            title={"Portfolio (Space Theme)"}
            content={
              "A simple portfolio website built on Three JS, with a space theme, feel free to check it out!"
            }
            link={"https://nyancyanide.github.io/3D-Website/"}
            action={"Go Website"}
          />
          <Imagecardy
            image={project4}
            alt="project-4"
            title={"Parallax Scrolling"}
            content={"A parallax scrolling website, that gives the feel of 3D effect when scrolled"}
            link={"https://nyancyanide.github.io/Parallax-Effect/"}
            action={"Go Website"}
          />
        </div>
        </div>
        <div className=''>&#8203;</div>
      </div>
  )
}

export default Contentp
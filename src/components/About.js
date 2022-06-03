import React from "react";
import pro from "../images/pro.png";

function About() {
  return (
    <div
      id="id2"
      className="border-white rounded-2xl border-2 mx-3 mt-5 md:mt-16 md:mx-28"
    >
      <div className="flex flex-row md:mx-12 mx-5 mt-8 md:mt-10 items-center">
        <div className="text-white font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
          About
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-11 w-11 md:h-14 md:w-14 text-cyan-600 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <hr className="my-2 border-white mx-6 md:mx-14"></hr>
      <div className=" text-white">
        <div>
          <img className="mx-auto p-5" src={pro} alt="" />
        </div>
        <div className="p-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum officia similique ipsa accusamus et, at exercitationem aspernatur eveniet eligendi veritatis ea rem praesentium tenetur expedita illo a repudiandae tempora reiciendis ducimus laudantium quibusdam, magnam ipsam animi. Nihil ex saepe nobis possimus consectetur ratione deserunt beatae voluptatum vero nam laudantium quae sequi illo molestias enim aliquam corporis ullam, reprehenderit voluptatem sint doloribus aut. Nesciunt, quis, voluptate consequatur voluptatibus animi voluptatem debitis odit facere veritatis aliquam vero distinctio incidunt adipisci, ab doloremque enim ratione tenetur. Nisi, quo. Voluptatem eaque velit blanditiis nam ipsa vel quaerat dolor unde, labore similique pariatur dolores consequatur inventore veritatis illo! Reiciendis vitae impedit molestias nulla ea quas, quos cumque eligendi qui consectetur ducimus sequi quae facere recusandae? Illum sed, unde velit ex debitis totam. Fugiat tempora rem nobis. Similique itaque neque sed fugiat temporibus? Eos, blanditiis incidunt illum dicta facilis illo, eligendi explicabo neque nemo iste mollitia obcaecati! Cumque, omnis accusantium, a architecto, maxime nam quod officia dolor ducimus odio explicabo voluptatem nostrum voluptatibus? Modi veniam aperiam illo corrupti voluptate voluptas molestias quas tempore, iusto suscipit repellat deserunt, ullam eveniet sint magnam iure? Dolor saepe cupiditate nobis officia dicta necessitatibus dignissimos beatae iure, iusto architecto possimus voluptatum.
        </div>
      </div>
    </div>
  );
}

export default About;

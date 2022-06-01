import React from 'react'

function About() {
  return (
    <div id="id2" className="border-yellow-500 rounded-2xl border-2  bg-white mx-3 mt-5 md:mt-16 md:mx-28">
      <div className="flex flex-row md:mx-12 mx-5 mt-3 md:mt-10 items-center">
        <div className="text-black font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
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
      <div className="mx-5 mt-2 text-justify md:mx-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tenetur.
      </div>
    </div>
  )
}

export default About
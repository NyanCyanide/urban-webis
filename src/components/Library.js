import React from 'react'

function Library() {
  return (
    <div id="id3" className="z-10 border-yellow-500 rounded-2xl border-2  bg-white mx-2 mt-5 md:mt-16 md:mx-28 ">
      <div className="flex flex-row md:mx-12 mx-5 mt-3 md:mt-10 items-center">
        <div className="text-black font-roboto text-5xl font-semibold md:text-6xl tracking-tighter md:tracking-wider ">
          Library
        </div>
        <hr></hr>
        <div className=''>
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
      <div className="mx-5 mt-2 text-justify md:mx-12">
       Blender Art
      </div>
    </div>
  )
}

export default Library
import React from "react";

function Imagecardy(props) {
  return (
    <div className="m flex-col md:drop-shadow-xl overflow-hidden rounded-2xl bg-yellow-200 border-2 border-yellow-600 select-none hover:bg-yellow-300 duration-700" >
      <div className="overflow-hidden">
        <img
          loading="lazy"
          className=" scale-100 hover:scale-125 duration-700 "
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div className="font-roboto mx-3 my-2">
        <p className="text-xl my-2 text-left">{props.title}</p>
        <p className="my-2 text-left">{props.content}</p>
        <a href={props.link} target="_blank" rel="noreferrer">
          <button className="bg-yellow-500 text-black hover:text-white border-2 border-yellow-600 hover:bg-yellow-600 hover:border-black duration-700 rounded-full px-3 md:px-4 py-0.5 justify-center font-roboto">
            <div className="flex flex-row items-center">
            {props.action}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1 hover:animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Imagecardy;

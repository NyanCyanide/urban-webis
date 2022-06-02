import React from "react";

function Imagecardy(props) {
  return (
    <div className="flex-col drop-shadow-xl overflow-hidden rounded-2xl bg-yellow-100 border-2 border-yellow-600 select-none hover:bg-yellow-200 duration-700" >
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
        <button className="bg-zinc-900 text-white rounded-full px-2 py-1 justify-center">
          <div className="flex flex-row items-center">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
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
      </div>
    </div>
  );
}

export default Imagecardy;

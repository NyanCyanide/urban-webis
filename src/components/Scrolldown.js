import React from "react";

function Scrolldown() {
  return (
    <div className="text-white font-mono tracking-tighter py-10">
      <div className="text-center">Scroll down</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto animate-bounce h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Scrolldown;

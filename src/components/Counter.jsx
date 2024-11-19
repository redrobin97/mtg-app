import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [hp, setHp] = useState(20);

  return (
    <div className="h-screen container flex flex-row space-x-2 items-center justify-center bg-gray-300 text-center border-l-2 border-black">
      <button
        className="bg-green-400 hover:bg-green-600 rounded-lg h-5/6 w-1/2 flex items-center justify-center text-center text-gray-100 text-5xl font-bold"
        onClick={() => {
          setHp(hp + 1);
        }}
      >
        +
      </button>
      <div className="text-center text-6xl rounded-lg bg-white z-10 absolute h-60 w-60 flex items-center justify-center">
        {hp}
      </div>
      <button
        className="bg-red-400 hover:bg-red-600 rounded-lg h-5/6 w-1/2 flex items-center justify-center text-center text-gray-100 text-5xl font-bold"
        onClick={() => {
          setHp(hp - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

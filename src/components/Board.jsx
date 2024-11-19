import React from "react";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import Settings from "./Settings";

export default function board() {
  return (
    <div className="flex flex-row ">
      <Counter />
      <Counter />
      <div className="m-5 flex flex-col justify-around items-center">
        <Settings />
      </div>
    </div>
  );
}

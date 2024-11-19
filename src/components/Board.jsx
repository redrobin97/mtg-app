import React from "react";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import Settings from "./Settings";

export default function board() {
  return (
    <div className="flex flex-col h-screen">
      <Counter />
      <div className="m-5 flex flex-row justify-around items-center">
        <Settings />
      </div>
      <Counter />
    </div>
  );
}

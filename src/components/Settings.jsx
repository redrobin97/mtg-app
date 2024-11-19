import React from "react";
import { CiSettings } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function Settings() {
  const [settings, setSettings] = useState(false);

  return (
    <>
      <button
        onClick={() => (settings ? setSettings(false) : setSettings(true))}
      >
        <CiSettings className="hover-slow-spin" size={70} color="grey" />
      </button>
      <button>
        <GrPowerReset className="hover-slow-spin" size={60} color="grey" />
      </button>
      {settings && (
        <div className="fixed top-4 right-4 z-50 p-2 h-50 w-50 bg-gray-200 rounded-lg shadow-lg">
          SETTINGS OPENED Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ab, labore!
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";

const DarkMode = () => {

    const [darkOn, setDarkOn] = useState(true)

  return (
    <>
      {/* On: "bg-indigo-600", Off: "bg-gray-200" */}
      <div className="flex items-center h-full">
        <h1 className="pr-3 font-medium text-gray-600" >
          {
            `${darkOn ? "Oscuro" : "Claro"}`
          }
        </h1>
        <button
          onClick={() => setDarkOn(!darkOn)}
          type="button"
          aria-pressed="false"
          className={`relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out ${darkOn ? "bg-blue-900" : "bg-gray-200"}  border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-500`}
        >
          <span className="sr-only">Use setting</span>
          {/* On: "translate-x-5", Off: "translate-x-0" */}
          <span
            aria-hidden="true"
            className={`inline-block w-5 h-5 transition duration-200 ease-in-out transform ${darkOn ? "translate-x-5" : "translate-x-0"} bg-white rounded-full shadow ring-0`}
          ></span>
        </button>
      </div>
    </>
  );
};

export default DarkMode;

import React, { useState } from "react";
import WorkColumn from "./WorkColumn";
import WorkGrid from "./WorkGrid";

const Prueba = () => {
  const [state, setState] = useState("grid");

  console.log(state);

  return (
    <div className="w-full h-96 bg-red-400 flex justify-center item">
      <div>
        <button
          className="bg-white w-10 text-black"
          onClick={() => setState(() => "grid")}
        >
          +
        </button>
        <h1>{state}</h1>
        <button
          className="bg-white w-10 text-black"
          onClick={() => setState(() => "column")}
        >
          -
        </button>
      </div>
      {state === "column" ? <WorkColumn /> : <WorkGrid />}
    </div>
  );
};

export default Prueba;

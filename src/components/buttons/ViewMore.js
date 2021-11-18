import React from "react";

import UpSVG from "./UpSVG";
import DownSVG from "./DownSVG";

// create up and down components for SVGs +txt s and render dynamically

export default function ViewMore({ toggleFunc, toggleStatus, team }) {
  return (
    <React.Fragment>
      <button
        onClick={toggleFunc}
        className="mx-auto sm:pt-4 group flex flex-col items-center mb-5"
      >
        {toggleStatus ? <UpSVG team={team} /> : <DownSVG team={team} />}
      </button>
    </React.Fragment>
  );
}

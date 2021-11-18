import React from "react";

export default function DownSVG({ team }) {
  return (
    <React.Fragment>
      <p className="group-hover:text-hoverDark text-xl">View More</p>
      <svg
        height="25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
        fill={team.secondColor}
        className="bi bi-caret-down"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
      </svg>
    </React.Fragment>
  );
}

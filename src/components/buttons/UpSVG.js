import React from "react";

export default function UpSVG({ team }) {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        fill={team.secondColor}
        className="bi bi-caret-up"
        viewBox="0 0 16 16"
      >
        <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
      </svg>
      <p className="group-hover:text-hoverDark">View Less</p>
    </React.Fragment>
  );
}
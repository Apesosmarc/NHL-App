import React from "react";

export default function HomeAway({ home, team }) {
  const status = team.name === home.team.name ? "Home" : "Away";

  return (
    <div className="flex justify-center">
      <h1
        style={{ backgroundColor: team.mainColor, color: team.secondColor }}
        className="pt-0 px-2 pb-1 rounded-b-lg tracking-wider"
      >
        {status}
      </h1>
    </div>
  );
}

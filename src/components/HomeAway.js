import React from "react";

//Func determines if home or away
export default function HomeAway({ home, team }) {
  const status = team.name === home.team.name ? "Home" : "Away";
  return status === "Home" ? (
    <div className="flex justify-center">
      <h1
        style={{
          backgroundColor: team.mainColor,
          color: team.secondColor,
          fontWeight: "bold",
        }}
        className="pt-0 px-2 pb-1 rounded-b-lg tracking-wider"
      >
        {status}
      </h1>
    </div>
  ) : (
    <div className="flex justify-center">
      <h1
        style={{
          backgroundColor: "white",
          color: team.mainColor,
          fontWeight: "bold",
          border: `1px solid ${team.secondColor}`,
        }}
        className="pt-0 px-2 pb-1 rounded-b-lg tracking-wider"
      >
        {status}
      </h1>
    </div>
  );
}

import React from "react";

export default function StatsHeader({ team }) {
  return (
    <div className="pt-16 pb-8 flex content-center justify-center">
      <h1
        className="bottom-header sm:text-4xl"
        style={{
          borderBottom: `3px solid ${team.mainColor}`,
        }}
      >
        {team.name}
      </h1>
    </div>
  );
}

import React from "react";

export default function TeamText({ team }) {
  return (
    <div>
      {team.teamText !== null && (
        <img
          className="mx-auto pt-5"
          src={team.teamText}
          alt={`${team.name} logo in words`}
        />
      )}
    </div>
  );
}

import React from "react";

export default function TeamText({ team }) {
  return (
    <div>
      {team.teamText !== null && (
        <img
          className="mx-auto my-auto pt-8"
          src={team.teamText}
          alt={`${team.name} logo in words`}
        />
      )}
    </div>
  );
}

import React from "react";

//dynamically loads Team text above team logo

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

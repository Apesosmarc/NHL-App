import React from "react";
import getTeamInfo from "../../utils/getTeamInfo";
import { Link } from "react-router-dom";

export default function TeamCard({
  link,
  nextGame,
  fullColumn,
  displayedTeam,
  win,
}) {
  const logo = getTeamInfo(nextGame.id).smallLogo;
  const teamName = nextGame.commonName.default;

  //Increases the size of the first-and-last-game-cards
  const sizeUp = fullColumn && "sm:w-26 sm:h-36";

  // Disables the icon hover and link if the logo is the logo of the team showing
  let teamDisplayed = false;
  if (displayedTeam) {
    teamDisplayed = displayedTeam.id === nextGame.id && true;
  }

  return (
    <div className={`teamcard-info ${sizeUp}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt={`${teamName} logo`}
          className={`teamcard-logo transform hover:opacity-30`}
        />
      </a>

      <h1 className="text-xs sm:text-sm">{teamName}</h1>
      <ul className="flex text-xs">
        <li>{win ? 0 : 1}</li>
        <small className="mx-2">-</small>

        <li>{win ? 1 : 0}</li>
      </ul>
    </div>
  );
}

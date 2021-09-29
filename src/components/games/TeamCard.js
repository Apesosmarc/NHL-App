import React from "react";
import getTeamInfo from "../../utils/getTeamInfo";
import { Link } from "react-router-dom";

export default function TeamCard({
  nextGame,
  selectTeam,
  firstGame,
  displayedTeam,
}) {
  const team = getTeamInfo(nextGame.team.id);
  const logo = team.smallLogo;
  //Increases the size of the first game card
  const sizeUp = firstGame && "sm:w-26 sm:h-36";

  // Disables the icon link if the logo is the logo of the team showing
  let teamDisplayed = false;
  if (displayedTeam) {
    teamDisplayed = displayedTeam.id === team.id && true;
  }
  return (
    <div
      className={`w-24 h-32 flex flex-col justify-between items-center text-center self-center ${sizeUp}`}
    >
      <Link to={`/${team.abrev}`}>
        <img
          onClick={() => selectTeam(team.id)}
          src={logo}
          alt={`${team.name} logo`}
          className={`teamcard-logo
            ${teamDisplayed === true ? null : "transform hover:opacity-50"}
          `}
        />
      </Link>
      <h1 className="text-xs sm:text-sm">{team.name}</h1>
      <ul className="flex text-xs">
        <li>{nextGame.leagueRecord.wins}</li>
        <small className="mx-2">-</small>
        <li>{nextGame.leagueRecord.losses}</li>
      </ul>
    </div>
  );
}

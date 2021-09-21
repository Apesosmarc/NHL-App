import React from "react";
import getTeamInfo from "../utils/getTeamInfo";
import { Link } from "react-router-dom";

export default function TeamCard({ nextGame, selectTeam, firstGame }) {
  const team = getTeamInfo(nextGame.team.id);
  // should pass team as opposed to having import data
  const logo = team.smallLogo;
  //Increases the size of the first game card
  const sizeUp = firstGame && "sm:w-26 sm:h-36";
  return (
    <div
      className={`w-24 h-32 flex flex-col justify-between items-center text-center self-center ${sizeUp}`}
    >
      <Link to={`/${team.abrev}`}>
        <img
          onClick={() => selectTeam(team.id)}
          src={logo}
          alt={`${team.name} logo`}
          className=" transform hover:opacity-50"
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

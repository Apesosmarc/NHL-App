import React from "react";
import teams from "../data/teams";

export default function TeamCard({ nextGame, selectTeam, gameNum }) {
  if (nextGame.length !== 0) {
    // should pass team as opposed to having import data
    const id = nextGame.team.id;
    const logo = teams[nextGame.team.id].smallLogo;
    //Increases the size of the first game card
    const sizeUp = gameNum === 0 && "sm:w-26 sm:h-36";
    return (
      <div
        className={`w-24 h-32 flex flex-col justify-between items-center text-center self-center ${sizeUp}`}
      >
        <img
          onClick={() => selectTeam(id)}
          src={logo}
          alt={`${teams[nextGame.team.id].name} logo`}
          className=" transform hover:opacity-50"
        />
        <h1 className="text-xs sm:text-sm">{nextGame.team.name}</h1>
        <ul className="flex text-xs">
          <li>{nextGame.leagueRecord.wins}</li>
          <small className="mx-2">-</small>
          <li>{nextGame.leagueRecord.losses}</li>
        </ul>
      </div>
    );
  }
}

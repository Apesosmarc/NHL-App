import React from "react";
import teams from "../data/teams";

export default function TeamCard({ nextGame, selectTeam }) {
  if (nextGame.length != 0) {
    const id = nextGame.team.id;
    const logo = teams[nextGame.team.id].smallLogo;
    return (
      <div className="py-1 flex items-center">
        <img onClick={() => selectTeam(id)} src={logo} alt="" />
        <div className="ml-2 flex flex-col text-sm">
          <h1>{nextGame.team.name}</h1>
          <ul className="flex text-xs">
            <li>{nextGame.leagueRecord.wins}</li>
            <small className="mx-2">-</small>
            <li>{nextGame.leagueRecord.losses}</li>
          </ul>
        </div>
      </div>
    );
  }
}

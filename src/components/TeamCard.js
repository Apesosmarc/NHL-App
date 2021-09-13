import React from "react";
import teams from "../data/teams";

export default function TeamCard({ nextGame, selectTeam }) {
  if (nextGame.length !== 0) {
    // should pass team as opposed to having import data
    const id = nextGame.team.id;
    const logo = teams[nextGame.team.id].smallLogo;
    return (
      <div className="flex flex-col justify-between items-center text-center w-24">
        <img
          onClick={() => selectTeam(id)}
          src={logo}
          alt={`${teams[nextGame.team.id].name} logo`}
          className="mb-2 transform hover:opacity-50"
        />
        <h1 className="text-xs mb-2 ">{nextGame.team.name}</h1>
        <ul className="flex text-xs mb-2">
          <li>{nextGame.leagueRecord.wins}</li>
          <small className="mx-2">-</small>
          <li>{nextGame.leagueRecord.losses}</li>
        </ul>
      </div>
    );
  }
}

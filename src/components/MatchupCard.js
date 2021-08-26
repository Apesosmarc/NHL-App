import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import { dateConverter } from "../utils/dateConverter";
import HomeAway from "./HomeAway";

export default function MatchupCard({ gameInfo, team, selectTeam }) {
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  return (
    <div className="border-solid border-2 border-gray-200 px-1 m-1">
      <HomeAway team={team} home={gameInfo.teams.home} />
      <div className="pt-0 pb-2 flex justify-between ">
        <div className="flex flex-col">
          <TeamCard nextGame={gameInfo.teams.away} selectTeam={selectTeam} />
          <p className="ml-20 ">@</p>
          <TeamCard nextGame={gameInfo.teams.home} selectTeam={selectTeam} />
        </div>
        <div className="flex flex-col justify-center align-center">
          <GameDate
            gameDate={gameDate}
            gameTime={gameTime}
            gameVenue={gameInfo.venue.name}
          />
        </div>
      </div>
    </div>
  );
}

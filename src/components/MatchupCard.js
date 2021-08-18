import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import { dateConverter } from "../utils/dateConverter";
import HomeAway from "./HomeAway";

export default function MatchupCard({ gameInfo, team }) {
  const teams = gameInfo.teams;
  const gameDay = gameInfo.gameDate;
  const gameVenue = gameInfo.venue.name;
  const [gameDate, gameTime] = dateConverter(gameDay);

  return (
    <div className="border-solid border-2 border-gray-200 px-1 m-1">
      <HomeAway team={team} home={teams.home} />
      <div className="pt-0 pb-2 flex justify-between ">
        <div className="flex flex-col">
          <TeamCard nextGame={teams.away} />
          <p className="ml-20 ">@</p>
          <TeamCard nextGame={teams.home} />
        </div>
        <div className="flex flex-col justify-center align-center">
          <GameDate
            gameDate={gameDate}
            gameTime={gameTime}
            gameVenue={gameVenue}
          />
        </div>
      </div>
    </div>
  );
}

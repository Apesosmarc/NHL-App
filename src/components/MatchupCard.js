import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import { dateConverter } from "../utils/dateConverter";
import HomeAway from "./HomeAway";

export default function MatchupCard({ gameInfo, team }) {
  if (gameInfo) {
    const away = gameInfo.teams.away;
    const home = gameInfo.teams.home;
    const gameDay = gameInfo.gameDate;
    const gameVenue = gameInfo.venue.name;
    const [gameDate, gameTime] = dateConverter(gameDay);

    return (
      <div className="border-solid border-2 border-gray-200 px-1 m-1">
        <HomeAway team={team} home={home} />
        <div className="pt-0 pb-2 flex justify-between ">
          <div className="flex flex-col">
            <TeamCard nextGame={away} />
            <p className="ml-20 ">@</p>
            <TeamCard nextGame={home} />
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

  return <div>loading...</div>;
}

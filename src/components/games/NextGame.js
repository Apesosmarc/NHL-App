import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";

import { dateConverter } from "../../utils/dateConverter";

export default function NextGame({ gameInfo, team, nextGame }) {
  // inits firstGame for TeamCard styling
  const firstGame = true;

  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  return (
    <div
      className={`teamcard sm:max-w-lg md:max-w-xl sm:col-span-full lg:col-start-1 lg:col-span-2 mx-auto sm:mb-6`}
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div
        className={`flex max-w-xs justify-between content-center mx-auto sm:max-w-lg md:max-w-xl `}
      >
        <TeamCard
          displayedTeam={team}
          firstGame={firstGame}
          nextGame={gameInfo.teams.away}
        />
        <GameDate
          firstGame={firstGame}
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
        />
        <TeamCard
          displayedTeam={team}
          firstGame={firstGame}
          nextGame={gameInfo.teams.home}
        />
      </div>
    </div>
  );
}

import React from "react";
import TeamCard from "../TeamCard";
import GameDate from "../GameDate";

import { dateConverter } from "../../utils/dateConverter";
import getTeamInfo from "../../utils/getTeamInfo";

export default function NextGame({ selectTeam, gameInfo, team, nextGame }) {
  gameInfo = gameInfo.games[0];

  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  const firstGame = true;
  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  const firstGameStyling =
    "sm:max-w-lg md:max-w-xl sm:col-span-full lg:col-start-1 lg:col-span-2 mx-auto";

  const gameWidth = "sm:max-w-lg md:max-w-xl";

  return (
    <div
      className={`teamcard ${firstGameStyling}`}
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div
        className={`flex max-w-xs justify-between content-center mx-auto ${gameWidth}`}
      >
        <TeamCard
          firstGame={firstGame}
          nextGame={gameInfo.teams.away}
          selectTeam={selectTeam}
        />
        <GameDate
          firstGame={firstGame}
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
        />
        <TeamCard
          firstGame={firstGame}
          nextGame={gameInfo.teams.home}
          selectTeam={selectTeam}
        />
      </div>
    </div>
  );
}

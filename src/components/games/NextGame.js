import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import LiveScore from "./LiveScore";
import ScoreDisplay from "./ScoreDisplay";
import checkIfLive from "../../utils/checkIfLive";
import FormatGameInfo from "../layout/FormatGameInfo";

import { dateConverter } from "../../utils/dateConverter";

export default function NextGame({
  gameInfo,
  team,
  nextGame,
  fullColumn,
  status,
}) {
  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  return (
    <div
      className={`teamcard  max-w-xl lg:col-start-1 lg:col-span-2 mx-auto sm:mb-6 max-h-52`}
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div
        className={`flex justify-between content-center mx-auto max-w-lg md:max-w-xl `}
      >
        <TeamCard
          displayedTeam={team}
          fullColumn={fullColumn}
          nextGame={gameInfo.teams.away}
        />
        <FormatGameInfo
          fullColumn={fullColumn}
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
          team={team}
          gameStatus={status}
        />

        <TeamCard
          displayedTeam={team}
          fullColumn={fullColumn}
          nextGame={gameInfo.teams.home}
        />
      </div>
    </div>
  );
}

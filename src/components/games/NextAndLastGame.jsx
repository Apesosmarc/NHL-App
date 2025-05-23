import React from "react";
import TeamCard from "./TeamCard";

import FormatGameInfo from "../layout/FormatGameInfo";

import { dateConverter } from "../../utils/dateConverter";

//component creates different styles for the first and last game for each team page
export default function NextAndLastGame({
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
      className={`teamcard first-and-last-game-card sm:mb-6`}
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div className={`first-and-last-game-info`}>
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

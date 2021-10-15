import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import LiveScore from "./LiveScore";
import checkIfLive from "../../utils/checkIfLive";

import { dateConverter } from "../../utils/dateConverter";

export default function NextGame({ gameInfo, team, nextGame, firstGame }) {
  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  return (
    <div
      className={`teamcard  md:max-w-xl lg:col-start-1 lg:col-span-2 mx-auto sm:mb-6`}
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
        {/* 
        {checkIfLive(gameInfo.status) ? (
          <LiveScore gameInfo={gameInfo.link} />
        ) : (
          <GameDate
            firstGame={firstGame}
            gameInfo={gameInfo}
            gameDate={gameDate}
            gameTime={gameTime}
            gameVenue={gameInfo.venue.name}
          />

        )} */}

        <LiveScore gameInfo={gameInfo.link} />

        <TeamCard
          displayedTeam={team}
          firstGame={firstGame}
          nextGame={gameInfo.teams.home}
        />
      </div>
    </div>
  );
}

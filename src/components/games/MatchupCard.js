import React from "react";
import TeamCard from "./TeamCard";

import Border from "../layout/Border";
import { dateConverter } from "../../utils/dateConverter";

import FormatGameInfo from "../layout/FormatGameInfo";

export default function MatchupCard({
  gameInfo,
  team,
  selectTeam,
  gameStatus,
}) {
  const homeTeamId = gameInfo.homeTeam.id;
  const awayTeamId = gameInfo.awayTeam.id;

  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.startTimeUTC);

  return (
    <div className={`teamcard col-auto`}>
      <Border
        team={team}
        homeTeamId={homeTeamId}
        awayTeamId={awayTeamId}
        gameInfo={gameInfo.homeTeam}
      />
      <div
        className={`flex w-3/4 md:w-full justify-evenly content-center mx-auto`}
      >
        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.homeTeam}
          selectTeam={selectTeam}
        />

        <FormatGameInfo
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
          gameStatus={gameInfo.gameState}
        />

        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.awayTeam}
          selectTeam={selectTeam}
        />
      </div>
    </div>
  );
}

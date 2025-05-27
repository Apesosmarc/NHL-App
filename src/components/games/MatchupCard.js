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
          link={`https://nhl.com/${gameInfo.homeTeam.commonName.default}`}
          displayedTeam={team}
          nextGame={gameInfo.homeTeam}
          selectTeam={selectTeam}
          win={
            gameInfo.homeTeam.score >= gameInfo.awayTeam.score ? true : false
          }
        />

        <FormatGameInfo
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
          gameStatus={gameInfo.gameState}
        />

        <TeamCard
          link={`https://nhl.com/${gameInfo.awayTeam.commonName.default}`}
          displayedTeam={team}
          nextGame={gameInfo.awayTeam}
          selectTeam={selectTeam}
          win={
            gameInfo.awayTeam.score >= gameInfo.homeTeam.score ? true : false
          }
        />
      </div>
    </div>
  );
}

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
  const homeTeamId = gameInfo.teams.home.team.id;
  const awayTeamId = gameInfo.teams.away.team.id;
  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  return (
    <div className={`teamcard col-auto`}>
      <Border
        team={team}
        homeTeamId={homeTeamId}
        awayTeamId={awayTeamId}
        gameInfo={gameInfo}
      />
      <div
        className={`flex w-3/4 md:w-full justify-evenly content-center mx-auto`}
      >
        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.teams.away}
          selectTeam={selectTeam}
        />

        <FormatGameInfo
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
          gameStatus={gameStatus}
        />

        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.teams.home}
          selectTeam={selectTeam}
        />
      </div>
    </div>
  );
}

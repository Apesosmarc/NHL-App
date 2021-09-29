import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import Border from "../layout/Border";
import { dateConverter } from "../../utils/dateConverter";

export default function MatchupCard({ gameInfo, team, selectTeam }) {
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
      <div className={`flex max-w-xs justify-between content-center mx-auto`}>
        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.teams.away}
          selectTeam={selectTeam}
        />
        <GameDate
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
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

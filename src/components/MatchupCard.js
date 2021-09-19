import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import { dateConverter } from "../utils/dateConverter";

export default function MatchupCard({
  gameInfo,
  team,
  selectTeam,
  nextRegSeason,
  active,
  gameNum,
}) {
  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  //Determines home/away border
  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  return (
    <div
      style={{ borderTop: `5px solid ${borderColor}` }}
      className={`teamcard col-auto`}
    >
      <div className={`flex max-w-xs justify-between content-center mx-auto`}>
        <TeamCard
          gameNum={gameNum}
          nextGame={gameInfo.teams.away}
          selectTeam={selectTeam}
        />
        <GameDate
          gameNum={gameNum}
          gameInfo={gameInfo}
          nextRegSeason={nextRegSeason}
          active={active}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
        />
        <TeamCard
          gameNum={gameNum}
          nextGame={gameInfo.teams.home}
          selectTeam={selectTeam}
        />
      </div>
    </div>
  );
}

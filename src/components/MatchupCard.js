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
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  const borderColor =
    gameInfo.teams.home.team.name === team.name ? `${team.mainColor}` : "#fff";

  const firstGameStyling = gameNum === 0 ? "col-span-full" : "col-auto";
  const firstGameWidth = gameNum === 0 ? "sm:max-w-lg md:max-w-xl" : null;
  return (
    <div
      style={{ borderTop: `5px solid ${borderColor}` }}
      className={`teamcard ${firstGameStyling} align-center`}
    >
      <div
        className={`${firstGameWidth} flex max-w-xs justify-between mx-auto `}
      >
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

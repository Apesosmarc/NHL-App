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
  return (
    <div
      style={{ borderTop: `5px solid ${borderColor}` }}
      className={`teamcard ${firstGameStyling}`}
    >
      <div className="flex mx-auto sm:max-w-xs">
        <TeamCard nextGame={gameInfo.teams.away} selectTeam={selectTeam} />
        <GameDate
          gameNum={gameNum}
          gameInfo={gameInfo}
          nextRegSeason={nextRegSeason}
          active={active}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
        />
        <TeamCard nextGame={gameInfo.teams.home} selectTeam={selectTeam} />
      </div>
    </div>
  );
}

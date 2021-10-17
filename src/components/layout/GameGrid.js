import React from "react";
import MatchupCard from "../games/MatchupCard";

export default function GameGrid({ schedule, team }) {
  // formats lg vp to fit number of games

  const gridFormat = schedule.length < 6 ? null : "lg:grid-cols-3";
  const singleFormat =
    schedule.length === 1 ? "mx-auto md:w-3/4 " : "sm:grid-cols-2  sm:grid";

  const renderedSched = (schedule) => {
    return schedule.map((game, i) => {
      // Status is restricted global - change prop name
      const gameStatus = game.status.abstractGameState;

      return (
        <MatchupCard
          gameInfo={game}
          team={team}
          key={i}
          gameNum={i}
          gameStatus={gameStatus}
        />
      );
    });
  };

  return (
    <div className={`gap-4  sm:grid-flow-row  ${singleFormat} ${gridFormat}`}>
      {renderedSched(schedule)}
    </div>
  );
}

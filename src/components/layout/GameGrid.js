import React from "react";
import MatchupCard from "../games/MatchupCard";

export default function GameGrid({ schedule, team }) {
  // if only one game span 75% of container, else grid 2 col
  const gridFormat =
    schedule.length === 1 ? "mx-auto md:w-3/4 " : "sm:grid-cols-2  sm:grid";

  const renderedSched = (schedule) => {
    return schedule.map((game, i) => {
      // Status is restricted global - changed prop name
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
    <div className={`gap-4  sm:grid-flow-row  ${gridFormat}`}>
      {renderedSched(schedule)}
    </div>
  );
}

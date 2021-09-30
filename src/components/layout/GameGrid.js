import React from "react";
import MatchupCard from "../games/MatchupCard";

export default function GameGrid({ schedule, team }) {
  // formats lg vp to fit number of games
  const gridFormat =
    schedule.length < 3 ? "lg:grid-cols-auto" : "lg:grid-cols-3";

  const renderedSched = (schedule) => {
    return schedule.map((game, i) => {
      return <MatchupCard gameInfo={game} team={team} key={i} gameNum={i} />;
    });
  };

  return (
    <div
      className={`gap-4 ${gridFormat} sm:grid sm:grid-flow-row sm:grid-cols-2`}
    >
      {renderedSched(schedule)}
    </div>
  );
}

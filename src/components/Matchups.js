import React from "react";
import MatchupCard from "./MatchupCard";
import GameTimer from "./GameTimer";

export default function Matchups({
  team,
  schedule,
  selectTeam,
  gameInfo,
  nextRegSeason,
  active,
}) {
  const renderedSched = schedule.map((game, i) => {
    return (
      <MatchupCard
        gameInfo={gameInfo}
        nextRegSeason={nextRegSeason}
        active={active}
        selectTeam={selectTeam}
        gameInfo={game.games[0]}
        team={team}
        gameNum={i}
        key={i}
      />
    );
  });

  return (
    <div className="sm:grid sm:grid-flow-row sm:grid-cols-2 gap-4">
      {renderedSched}
    </div>
  );
}

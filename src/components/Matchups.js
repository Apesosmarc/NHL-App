import React from "react";
import MatchupCard from "./MatchupCard";
import NextGame from "./games/NextGame";

export default function Matchups({
  team,
  schedule,
  selectTeam,
  gameInfo,
  nextRegSeason,
  active,
}) {
  const firstGameInfo = schedule[0];
  const renderedSched = schedule.slice(1, 4).map((game, i) => {
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
    <div>
      <NextGame
        firstGame={true}
        gameInfo={firstGameInfo}
        selectTeam={selectTeam}
        team={team}
      />
      <div className="sm:grid sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-6">
        {renderedSched}
      </div>
    </div>
  );
}

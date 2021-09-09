import React from "react";
import MatchupCard from "./MatchupCard";

export default function Matchups({ gameInfo, team, schedule, selectTeam }) {
  const renderedSched = schedule.map((game, i) => {
    return (
      <MatchupCard
        selectTeam={selectTeam}
        gameInfo={game.games[0]}
        team={team}
        gameNum={i.toString()}
        key={i}
      />
    );
  });

  return <div>{renderedSched}</div>;
}

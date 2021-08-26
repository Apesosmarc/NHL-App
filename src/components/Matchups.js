import React from "react";
import MatchupCard from "./MatchupCard";

export default function Matchups({ gameInfo, team, schedule, selectTeam }) {
  const renderedSched = schedule.map((game) => {
    return (
      <MatchupCard
        selectTeam={selectTeam}
        gameInfo={game.games[0]}
        team={team}
      />
    );
  });

  return <div>{renderedSched}</div>;
}

import React from "react";
import MatchupCard from "./MatchupCard";
import NextGame from "./games/NextGame";
import { useState, useEffect } from "react";

export default function Matchups({
  team,
  schedule,
  selectTeam,
  gameInfo,
  nextRegSeason,
  active,
}) {
  const [toggle, setToggle] = useState(false);
  const [shownSchedule, setShownSchedule] = useState(schedule.slice(1, 4));

  const viewMoreToggle = () => {
    console.log("toggled");
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log("loaded");
    if (toggle) {
      setShownSchedule(schedule.slice(1, 7));
    } else {
      setShownSchedule(schedule.slice(1, 4));
    }
  }, [schedule, toggle]);

  const firstGameInfo = schedule[0];
  const renderedSched = shownSchedule.map((game, i) => {
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
      <div className="flex">
        <button onClick={viewMoreToggle} className="mx-auto px-4 border">
          View More
        </button>
      </div>
    </div>
  );
}

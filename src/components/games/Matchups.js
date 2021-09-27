import React from "react";
import { useState, useEffect } from "react";
import ViewMore from "../buttons/ViewMore";
import MatchupCard from "./MatchupCard";
import NextGame from "./NextGame";

export default function Matchups({ team, schedule, selectTeam, active }) {
  const showThree = schedule.slice(1, 4);
  const showSix = schedule.slice(1, 7);
  const [toggle, setToggle] = useState(false);
  const [shownSchedule, setShownSchedule] = useState(showThree);

  const viewMoreToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log("called");
    if (toggle) {
      setShownSchedule(showSix);
    } else {
      setShownSchedule(showThree);
    }
  }, [schedule, toggle]);

  const firstGameInfo = schedule[0];
  const renderedSched = shownSchedule.map((game, i) => {
    return (
      <MatchupCard
        active={active}
        selectTeam={selectTeam}
        gameInfo={game.games[0]}
        team={team}
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
        <ViewMore toggle={viewMoreToggle} toggleStatus={toggle} team={team} />
      </div>
    </div>
  );
}

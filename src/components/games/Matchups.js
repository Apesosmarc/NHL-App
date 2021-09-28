import React from "react";
import { useState, useEffect } from "react";
import ViewMore from "../buttons/ViewMore";
import MatchupCard from "./MatchupCard";
import NextGame from "./NextGame";
import GameGrid from "../layout/GameGrid";

export default function Matchups({ team, schedule, selectTeam, gameNum }) {
  console.log(selectTeam);
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

  return (
    <div>
      <NextGame
        firstGame={true}
        gameInfo={firstGameInfo}
        selectTeam={selectTeam}
        team={team}
      />
      <GameGrid
        teamSchedule={shownSchedule}
        team={team}
        selectTeam={selectTeam}
      />
      <div className="flex">
        <ViewMore toggle={viewMoreToggle} toggleStatus={toggle} team={team} />
      </div>
    </div>
  );
}

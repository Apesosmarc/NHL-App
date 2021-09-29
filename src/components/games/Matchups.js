import React from "react";
import { useState, useEffect } from "react";
import ViewMore from "../buttons/ViewMore";
import MatchupCard from "./MatchupCard";
import NextGame from "./NextGame";
import GameGrid from "../layout/GameGrid";

export default function Matchups({ team, schedule, selectTeam, gameNum }) {
  // Format schedule to array of game objects
  schedule = schedule.map((gameInfo) => gameInfo.games[0]);
  // Array of three vs six games displayed on toggle
  const showThree = schedule.slice(1, 5);
  const showSix = schedule.slice(1, 8);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // reloads component on View More push
  }, [toggle]);

  const viewMoreToggle = () => {
    setToggle(!toggle);
  };

  schedule = toggle ? showSix : showThree;

  const firstGameInfo = schedule.shift();

  return (
    <div>
      <NextGame
        firstGame={true}
        gameInfo={firstGameInfo}
        selectTeam={selectTeam}
        team={team}
      />
      <GameGrid schedule={schedule} team={team} selectTeam={selectTeam} />
      <div className="flex">
        <ViewMore
          toggleFunc={viewMoreToggle}
          toggleStatus={toggle}
          team={team}
        />
      </div>
    </div>
  );
}

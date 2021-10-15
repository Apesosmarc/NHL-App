import React from "react";
import { useState, useEffect } from "react";
import ViewMore from "../buttons/ViewMore";
import PrevGame from "./PrevGame";
import NextGame from "./NextGame";
import GameGrid from "../layout/GameGrid";

export default function Matchups({ team, schedule }) {
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
      <h3>Previous Game</h3>
      <PrevGame team={team} />
      <h3>Upcoming Game</h3>
      <NextGame firstGame={true} gameInfo={firstGameInfo} team={team} />
      <GameGrid schedule={schedule} team={team} />
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

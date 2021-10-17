import React from "react";
import { useState } from "react";
import ViewMore from "../buttons/ViewMore";
import PrevGame from "./PrevGame";
import NextGame from "./NextGame";
import GameGrid from "../layout/GameGrid";
import GameDateHeaders from "../dates/GameDateHeaders";

export default function Matchups({ team, schedule, nextGameInfo }) {
  // Format schedule to array of game objects
  schedule = schedule.map((gameInfo) => gameInfo.games[0]);
  // Array of three vs six games displayed on toggle
  const showThree = schedule.slice(1, 5);
  const showSix = schedule.slice(1, 8);

  const [toggle, setToggle] = useState(false);

  const viewMoreToggle = () => {
    setToggle(!toggle);
  };

  schedule = toggle ? showSix : showThree;

  return (
    <div>
      <GameDateHeaders content={"Previous Game:"} />
      <PrevGame team={team} />
      <GameDateHeaders content={"Upcoming Games:"}></GameDateHeaders>
      <NextGame
        fullColumn={true}
        gameInfo={nextGameInfo}
        team={team}
        status={nextGameInfo.status.abstractGameState}
      />
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

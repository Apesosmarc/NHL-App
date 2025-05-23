import React from "react";
import { useState } from "react";
import ViewMore from "../buttons/ViewMore";
import PrevGame from "./PrevGame";
import NextAndLastGame from "./NextAndLastGame";
import GameGrid from "../layout/GameGrid";
import GameDateHeaders from "../dates/GameDateHeaders";

export default function Matchups({ team, schedule, nextGameInfo }) {
  // Format schedule to array of game objects
  schedule = schedule.map((gameInfo) => gameInfo.games[0]);

  // Array of three vs six games displayed on toggle
  const showThree = schedule.slice(1, 5);
  const showSix = schedule.slice(1, 8);

  // view more button display and toggle
  const [toggle, setToggle] = useState(false);

  const viewMoreToggle = () => {
    setToggle(!toggle);
  };

  // determines if "Upcoming Game" is currently live
  const checkIfLiveGame = () => {
    if (nextGameInfo.status.abstractGameState === "Live") {
      return "Current Game:";
    } else {
      return "Upcoming Game:";
    }
  };

  schedule = toggle ? showSix : showThree;

  return (
    <div>
      <GameDateHeaders content={"Previous Game:"} />
      <PrevGame team={team} />
      <GameDateHeaders content={checkIfLiveGame()}></GameDateHeaders>
      <NextAndLastGame
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

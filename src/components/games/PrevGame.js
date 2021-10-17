import React from "react";
import { useState, useEffect } from "react";
import { fetchPrevious } from "../../apis/nhl";
import NextGame from "./NextGame";

export default function PrevGame({ team }) {
  const [gameInfo, setGameInfo] = useState([]);

  const getPrevGame = async () => {
    const prevGameInfo = await fetchPrevious(team.id).get();

    setGameInfo(prevGameInfo);
  };
  useEffect(() => {
    if (gameInfo.length !== 0) return;
    getPrevGame();
  }, [gameInfo]);

  return gameInfo.length === 0 ? (
    <div></div>
  ) : (
    <NextGame
      fullColumn={true}
      status={
        gameInfo.data.teams[0].previousGameSchedule.dates[0].games[0].status
          .abstractGameState
      }
      gameInfo={gameInfo.data.teams[0].previousGameSchedule.dates[0].games[0]}
      team={team}
    />
  );
}

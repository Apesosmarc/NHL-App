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
    getPrevGame();
  }, []);

  return gameInfo.length === 0 ? (
    <div></div>
  ) : (
    <NextGame
      firstGame={true}
      gameInfo={gameInfo.data.teams[0].previousGameSchedule.dates[0].games[0]}
      team={team}
    />
  );
}

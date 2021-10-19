import React from "react";
import { useEffect, useState } from "react";
import ScoreDisplay from "./ScoreDisplay";
import { liveScore } from "../../apis/nhl";
import axios from "axios";

//statsapi.web.nhl.com/api/v1/game/ID/boxscore

export default function LiveScore({ gameInfo }) {
  const [liveData, setLiveData] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(async () => {
    const gameData = await axios.get(
      `https://statsapi.web.nhl.com${gameInfo.link}`
    );

    setLiveData(gameData.data.liveData.linescore);
    setScore(gameData.data.liveData.linescore.teams);
  }, []);

  if (liveData != null && score != null) {
    console.log(liveData, score);
  }

  return liveData != null && score != null ? (
    <div
      className={`text-center p-2 flex flex-col justify-center items-center`}
    >
      <div className="text-md md:text-lg font-semibold pb-3 flex items-center">
        <div className="rounded-full h-2 w-2 bg-red-500 ping mr-2"></div>
        <span className="text-sm  text-opacity-80 subtitle">Live</span>
      </div>

      <p className="text-2xl font-semibold p-2 lg:w-56 lg:p-0 w-28 ">{`${score.away.goals} - ${score.home.goals}`}</p>
      <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
        {`P${liveData.currentPeriod}`}
        <br></br>
        {`${liveData.currentPeriodTimeRemaining}`}
      </p>
    </div>
  ) : (
    <div></div>
  );
}

import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../utils/timerLogic";

export default function GameTimer({ gameInfo }) {
  const gameDate = new Date(gameInfo.gameDate);
  const [time, setTime] = useState(calculateTimeLeft(gameDate));

  useEffect(() => {
    // sets calculated time to state every 1s
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft(gameDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="mb-4 text-center text-sm subtitle lg:w-56 md:w-40 w-32">
      <h3>{time}</h3>
    </div>
  );
}

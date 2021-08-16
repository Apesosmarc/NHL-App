import React, { useState, useEffect } from "react";

export default function GameTimer({ gameInfo }) {
  const gameDate = new Date(gameInfo.gameDate);

  const calculateTimeLeft = () => {
    let currentTime = new Date();
    let diff = gameDate - currentTime;

    return diff.toString();
  };

  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <div>{time}</div>;
}

import React, { useState, useEffect } from "react";

export default function GameTimer({ gameInfo, nextRegSeason }) {
  // Conditional for Regular Season Game vs Pre Season
  const gameDate = nextRegSeason
    ? new Date(nextRegSeason)
    : new Date(gameInfo.gameDate);

  const calculateTimeLeft = () => {
    let currentTime = new Date();
    let diff = gameDate - currentTime;

    let days = diff / 1000 / 60 / 60 / 24;
    let hours = (diff / 1000 / 60 / 60) % 24;
    let mins = (diff / 1000 / 60) % 60;
    let seconds = (diff / 1000) % 60;

    const timeArr = [days, hours, mins, seconds].map((time) => {
      return Math.trunc(time);
    });

    let timeAbbrev = ["D", "H", "M", "S"];

    for (let i = 0; i < timeArr.length; i++) {
      timeArr[i] = timeArr[i] + timeAbbrev[i];
    }

    return timeArr.join(":");
  };

  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col justify-center w-full mb-4">
      <div className="mx-auto text-center">
        <h2 className="text-lg font-bold">Puck Drop Timer:</h2>
        <h3 className="tracking-tighter" style={{ fontFamily: "DM Mono" }}>
          {time}
        </h3>
      </div>
    </div>
  );
}

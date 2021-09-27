import React, { useState, useEffect } from "react";

export default function GameTimer({ gameInfo }) {
  const gameDate = new Date(gameInfo.gameDate);

  // Calculates next game timer
  const calculateTimeLeft = () => {
    let currentTime = new Date();
    let diff = gameDate - currentTime;

    let days = diff / 1000 / 60 / 60 / 24;
    let hours = (diff / 1000 / 60 / 60) % 24;
    let mins = (diff / 1000 / 60) % 60;
    let seconds = (diff / 1000) % 60;

    // creates timeArr of all calculated valued, truncs to normal ints
    const timeArr = [days, hours, mins, seconds].map((time) => {
      return Math.trunc(time);
    });

    let timeAbbrev = ["D", "H", "M", "S"];

    // Adds time ints with their corresponding abbreviation
    for (let i = 0; i < timeArr.length; i++) {
      timeArr[i] = timeArr[i] + timeAbbrev[i];
    }
    // adds spaces between each unit
    return timeArr.join(" : ");
  };

  // Sets calculated time to default time
  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    // sets calc time to set state every 1s
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="mb-4 text-center text-sm subtitle lg:w-56">
      <h3>{time}</h3>
    </div>
  );
}

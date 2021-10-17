import React from "react";

export default function ScoreDisplay({ gameInfo, gameDate = null, team }) {
  const homeScore = gameInfo.teams.home.score;
  const awayScore = gameInfo.teams.away.score;

  return (
    <div className={`text-center p-2 text-center`}>
      <p className="text-md md:text-lg font-semibold pb-3">{gameDate}</p>
      <p className="text-2xl font-semibold p-2 lg:w-56 lg:p-0 w-28 ">
        {awayScore} - {homeScore}
      </p>

      <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
        @{gameInfo.venue.name}
      </p>
    </div>
  );
}

//

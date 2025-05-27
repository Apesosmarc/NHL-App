import React from "react";

export default function ScoreDisplay({ gameInfo, gameDate = null, team }) {
  const homeScore = gameInfo.homeTeam.score;
  const awayScore = gameInfo.awayTeam.score;

  return (
    <div className={`text-center p-2 text-center`}>
      <p className="text-md md:text-lg font-semibold pb-3">{gameDate}</p>
      <p className="text-2xl font-semibold p-2 lg:w-56 lg:p-0 w-28 ">
        {awayScore} - {homeScore}
      </p>

      <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
        @{gameInfo.venue.default}
      </p>
      <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
        <a
          className="underline"
          href={`https://nhl.com${gameInfo.threeMinRecap}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Recap
        </a>
      </p>
    </div>
  );
}

//

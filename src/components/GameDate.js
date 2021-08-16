import React from "react";

export default function GameDate({ gameDate, gameTime, gameVenue }) {
  const getDate = () => {
    return (
      <div className="matchup-date-container p-2">
        <p className="text-md font-semibold">{gameDate}</p>
        <p className="text-sm font-semibold">{gameTime}</p>
        <p className="mt-3 text-sm font-semibold">@{gameVenue}</p>
      </div>
    );
  };

  return <React.Fragment>{gameDate ? getDate() : <div></div>}</React.Fragment>;
}

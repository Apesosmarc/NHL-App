import React from "react";
import GameTimer from "./GameTimer";

export default function GameDate({
  fullColumn,
  gameDate,
  gameTime,
  gameVenue,
  gameInfo,
}) {
  const getDate = () => {
    return (
      <div className={`text-center p-2`}>
        {fullColumn && <GameTimer gameInfo={gameInfo} />}
        <p className="text-md md:text-lg font-semibold">{gameDate}</p>
        <p className="text-md font-semibold">{gameTime}</p>
        <h2 className="py-1">@</h2>
        <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
          @{gameVenue}
        </p>
      </div>
    );
  };

  return (
    <React.Fragment>
      {gameDate ? getDate() : <div>loading...</div>}
    </React.Fragment>
  );
}

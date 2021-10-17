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

  //  <div className="p-2 h-100 flex flex-col justify-between  text-center">
  //    <div className="liveScore flex items-center justify-center">
  //      <div className="rounded-full h-2 w-2 bg-red-500 mr-2 ping"></div>
  //      <span className="text-sm  text-opacity-80 subtitle">FINAL</span>
  //      {/* <div className="date">DATE</div> */}
  //    </div>
  //    <div className="score flex justify-between ">
  //      <div className="awayScore text-xl font-bold">1</div>
  //      <div className="text-xl font-bold">-</div>
  //      <div className="homeScore text-xl font-bold">2</div>
  //    </div>
  //    <div className="period text-sm">P3</div>
  //  </div>;

  return <React.Fragment>{gameDate ? getDate() : <div></div>}</React.Fragment>;
}

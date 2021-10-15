import React from "react";
import { useEffect, useState } from "react";
import { liveScore } from "../../apis/nhl";

//statsapi.web.nhl.com/api/v1/game/ID/boxscore

export default function LiveScore({ gameInfo }) {
  // const [liveData, setLiveData] = useState(null);

  // const getLiveData = async () => {
  //   const liveGameData = await axios.get(
  //     `https://statsapi.web.nhl.com${gameInfo}`
  //   );
  //   setLiveData(liveGameData);
  // };

  // useEffect(() => {
  //   getLiveData();
  //   console.log(liveData.data.liveData);
  // }, []);

  return (
    <div className="p-2 h-100 flex flex-col justify-between w-1/4 text-center">
      <div className="liveScore flex items-center justify-center">
        <div className="rounded-full h-2 w-2 bg-red-500 mr-2 ping"></div>
        <span className="text-sm  text-opacity-80 subtitle">Live</span>
      </div>
      <div className="score flex justify-between ">
        <div className="awayScore text-xl font-bold">1</div>
        <div className="text-xl font-bold">-</div>
        <div className="homeScore text-xl font-bold">2</div>
      </div>
      <div className="period text-sm">P3 15:55</div>
    </div>
  );
}

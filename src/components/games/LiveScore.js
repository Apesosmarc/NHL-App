import React from "react";
import { useEffect, useState } from "react";
import ScoreDisplay from "./ScoreDisplay";
import { liveScore } from "../../apis/nhl";
import axios from "axios";

//statsapi.web.nhl.com/api/v1/game/ID/boxscore

export default function LiveScore({ gameInfo }) {
  const [liveData, setLiveData] = useState(null);

  const getLiveData = async () => {
    const liveGameData = await axios.get(
      `https://statsapi.web.nhl.com${gameInfo.link}`
    );

    setLiveData(liveGameData.data);
  };

  useEffect(() => {
    getLiveData();
    console.log(liveData);
  }, []);

  return (
    <div
      className={`text-center p-2 text-center flex flex-col justify-center items-center`}
    >
      <div className="text-md md:text-lg font-semibold pb-3 flex items-center">
        <div className="rounded-full h-2 w-2 bg-red-500 ping mr-2"></div>
        <span className="text-sm  text-opacity-80 subtitle">Live</span>
      </div>

      <p className="text-2xl font-semibold p-2 lg:w-56 lg:p-0 w-28 ">1-2</p>
      <p className="mt-6 text-black text-opacity-80 text-xs subtitle">
        15:55 P3
      </p>
    </div>
  );
}
//     <div className="lg:w-56 sm:w-40 w-32 h-100">
//       <div className="p-2 h-full flex flex-col justify-between w-3/4 lg:w-1/4 text-center mx-auto">
//         <div className="liveScore flex items-center justify-center">
//           {/* <div className="rounded-full h-2 w-2 bg-red-500 mr-2 ping"></div> */}
//           <span className="text-sm  text-opacity-80 subtitle">Live</span>
//           {/* <div className="date">DATE</div> */}
//         </div>
//         <div className="score flex justify-between ">
//           <div className="awayScore text-xl font-bold">1</div>
//           <div className="text-xl font-bold">-</div>
//           <div className="homeScore text-xl font-bold">2</div>
//         </div>
//         <div className="period text-sm">P3</div>
//       </div>
//     </div>

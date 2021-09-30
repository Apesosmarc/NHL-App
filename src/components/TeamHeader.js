import React from "react";
import Matchups from "./games/Matchups";
import SwitchContainer from "./buttons/SwitchContainer";

const TeamHeader = ({ team, nextGame, schedule }) => {
  if (nextGame.length !== 0) {
    const nextGameInfo = nextGame.nextGameSchedule.dates[0].games[0];

    return (
      <div>
        <div className="h-60 flex flex-col justify-center align-center items-end md:mb-8">
          <img
            src={team.mainLogo}
            alt=""
            height="200"
            width="200"
            className="mx-auto my-auto "
          />
        </div>
        <SwitchContainer team={team} />
        <Matchups gameInfo={nextGameInfo} team={team} schedule={schedule} />
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default TeamHeader;

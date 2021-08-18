import React from "react";
import GameTimer from "./GameTimer";
import Matchups from "./Matchups";

const TeamHeader = ({ team, nextGame, active, prevGame, schedule }) => {
  if (nextGame.length != 0) {
    const nextGameInfo = nextGame.nextGameSchedule.dates[0].games[0];

    return (
      <div>
        <div className="py-5">
          <img
            src={team.mainLogo}
            alt=""
            height="200"
            width="200"
            className="mx-auto"
          />
        </div>
        {!active ? <GameTimer gameInfo={nextGameInfo} /> : null}
        <Matchups gameInfo={nextGameInfo} team={team} schedule={schedule} />
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default TeamHeader;

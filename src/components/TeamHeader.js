import React from "react";
import MatchupCard from "./MatchupCard";
import GameTimer from "./GameTimer";

const TeamHeader = ({ team, nextGame }) => {
  if (nextGame.length != 0) {
    const gameInfo = nextGame.nextGameSchedule.dates[0].games[0];

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
        <GameTimer gameInfo={gameInfo} />
        <MatchupCard gameInfo={gameInfo} team={team} />
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default TeamHeader;

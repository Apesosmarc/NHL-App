import React from "react";
import GameTimer from "./GameTimer";
import Matchups from "./Matchups";

const TeamHeader = ({ team, nextGame, active, schedule, selectTeam }) => {
  if (nextGame.length !== 0) {
    const nextGameInfo = nextGame.nextGameSchedule.dates[0].games[0];
    const nextRegSeason = schedule[0].games[0].gameDate;
    return (
      <div className="">
        <div className="py-5 h-60 flex flex-col justify-center align-center">
          <img
            src={team.mainLogo}
            alt=""
            height="200"
            width="200"
            className="mx-auto my-auto"
          />
        </div>
        {!active ? (
          <GameTimer gameInfo={nextGameInfo} nextRegSeason={nextRegSeason} />
        ) : null}
        <Matchups
          gameInfo={nextGameInfo}
          team={team}
          schedule={schedule}
          selectTeam={selectTeam}
        />
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default TeamHeader;

import React from "react";
import Matchups from "./games/Matchups";

const TeamHeader = ({ team, nextGame, active, schedule, selectTeam }) => {
  if (nextGame.length !== 0) {
    const nextGameInfo = nextGame.nextGameSchedule.dates[0].games[0];

    return (
      <div>
        <div className="h-60 flex flex-col justify-center align-center md:mb-8">
          <img
            src={team.mainLogo}
            alt=""
            height="200"
            width="200"
            className="mx-auto my-auto "
          />
        </div>

        <Matchups
          active={active}
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

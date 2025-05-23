import React from "react";
import Matchups from "./games/Matchups";
import SwitchContainer from "./buttons/SwitchContainer";

// comp includes everything from team header img to all game matchups.

const TeamHeader = ({ team, nextGame, schedule }) => {
  // destructures dates, scores for immediate game
  if (nextGame.length !== 0) {
    const nextGameInfo = nextGame.nextGameSchedule.dates[0].games[0];

    return (
      <div>
        <div className="team-header align-center">
          <img
            src={team.mainLogo}
            alt={`${team.name} logo`}
            height="200"
            width="200"
            className="mx-auto my-auto "
          />
        </div>
        {/* CONTAINS FAVORITE TOGGLE + ALL GAMES LINK */}
        <SwitchContainer team={team} />

        <Matchups nextGameInfo={nextGameInfo} team={team} schedule={schedule} />
      </div>
    );
  }

  return <div className="">Loading...</div>;
};

export default TeamHeader;

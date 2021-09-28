import React from "react";
import TeamCard from "./TeamCard";
import GameDate from "./GameDate";
import { dateConverter } from "../../utils/dateConverter";
import getTeamInfo from "../../utils/getTeamInfo";

export default function MatchupCard({ gameInfo, team, selectTeam }) {
  const homeTeam = gameInfo.teams.home.team.id;
  const awayTeam = gameInfo.teams.away.team.id;
  console.log(getTeamInfo(homeTeam));
  // Gets date + time from util function.
  const [gameDate, gameTime] = dateConverter(gameInfo.gameDate);

  //Determines home/away border
  const borderColor =
    gameInfo.teams.home.team.id === team.id ? `${team.mainColor}` : "#fff";

  return (
    <div
      // style={{ borderTop: `5px solid ${borderColor}` }}
      className={`teamcard col-auto`}
    >
      <div
        style={{
          background: `linear-gradient(250deg, ${
            getTeamInfo(homeTeam).mainColor
          }, ${getTeamInfo(awayTeam).mainColor})`,
        }}
        className="gradient-border"
      ></div>
      <div className={`flex max-w-xs justify-between content-center mx-auto`}>
        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.teams.away}
          selectTeam={selectTeam}
        />
        <GameDate
          gameInfo={gameInfo}
          gameDate={gameDate}
          gameTime={gameTime}
          gameVenue={gameInfo.venue.name}
        />
        <TeamCard
          displayedTeam={team}
          nextGame={gameInfo.teams.home}
          selectTeam={selectTeam}
        />
      </div>
    </div>
  );
}

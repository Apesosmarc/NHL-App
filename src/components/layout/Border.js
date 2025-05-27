import React from "react";
import getTeamInfo from "../../utils/getTeamInfo";

export default function Border({ team, homeTeamId, awayTeamId, gameInfo }) {
  //Determines border color based on Home/Away
  const homeOrAway = (id) => {
    return homeTeamId === id ? `${team.mainColor}` : "#fff";
  };

  const borderStyle = {
    background: null,
  };

  //   Non team component loads linear gradient over Home/Away colors
  borderStyle.background = team
    ? // converts team.id to num due to "===" vs "==" React error msg
      homeOrAway(parseInt(team.id))
    : `linear-gradient(to right, ${getTeamInfo(homeTeamId).mainColor}, ${
        getTeamInfo(awayTeamId).mainColor
      })`;

  return (
    <div
      style={borderStyle}
      className={team ? "non-gradient-border" : "gradient-border"}
    ></div>
  );
}

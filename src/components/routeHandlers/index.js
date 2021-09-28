import React from "react";
import teams from "../../data/teams";
import teamAbrev from "../../data/teamAbrev";
import App from "../App";
import Home from "../Home";

// Component that loads the team based on path or team abreviation. I.E (*/10, */TOR)

export default function RouteHandle(props) {
  const id = props.match.params.id;
  const verifyTeam = (teamId) => {
    teamId = teamId.toLowerCase();
    if (teams[teamId]) {
      return <App id={teamId} />;
    } else if (teamAbrev[teamId]) {
      return <App id={teamAbrev[teamId]} />;
    } else {
      return <Home />;
    }
  };

  return <div>{verifyTeam(id)}</div>;
}

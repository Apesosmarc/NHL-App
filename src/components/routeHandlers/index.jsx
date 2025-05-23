import React from "react";
import teams from "../../data/teams";
import teamAbrev from "../../data/teamAbrev";
import App from "../App";
import Home from "../Home";

// Component that loads the team based on path or team abreviation entered into URL. I.E (*/10, */TOR)
export default function RouteHandle(props) {
  const verifyTeam = (teamId) => {
    // if abbriev, ex: BOS, is entered in URL lowerCase it
    teamId = isNaN(teamId) ? teamId.toLowerCase() : teamId;

    if (teams[teamId]) {
      return <App id={teamId} />;
    } else if (teamAbrev[teamId]) {
      return <App id={teamAbrev[teamId]} />;
    }
    // if no match or nothing entered, default to home
    else {
      return <Home />;
    }
  };

  return <div>{verifyTeam(props.match.params.id)}</div>;
}

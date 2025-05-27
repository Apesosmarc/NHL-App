import React from "react";
import teams from "../../data/teams";
import teamAbrev from "../../data/teamAbrev";
import App from "../App";
import Home from "../Home";

// Component that loads the team based on path or team abreviation entered into URL. I.E (*/10, */TOR)
export default function RouteHandle(props) {
  const verifyTeam = (teamId) => {
    return <Home />;
  };

  return <div>{verifyTeam(props.match.params.id)}</div>;
}

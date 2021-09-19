import teams from "../data/teams";

export default function getTeamInfo(id) {
  const teamInfo = teams[id];

  return teamInfo;
}

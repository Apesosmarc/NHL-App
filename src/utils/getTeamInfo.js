import teams from "../data/teams";

export default function getTeamInfo(id) {
  if (!teams[id]) return teams[2];
  return teams[id];
}

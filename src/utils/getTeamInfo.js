import teams from "../data/teams";

export default function getTeamInfo(id) {
  if (!teams[id]) throw new Error("ID passed was not valid");
  return teams[id];
}

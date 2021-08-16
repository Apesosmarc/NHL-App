import axios from "axios";

const baseURL = "https://statsapi.web.nhl.com/api/v1/";

const divisionStandings = axios.create({
  baseURL,
});

const game = axios.create({
  baseURL,
  params: {
    expand: "team.schedule.next",
  },
});

export { divisionStandings, game };

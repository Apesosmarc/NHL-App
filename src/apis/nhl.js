import axios from "axios";

const baseURL = "https://statsapi.web.nhl.com/api/v1/";

const divisionStandings = axios.create({
  baseURL,
});

const game = (sched) =>
  axios.create({
    baseURL,
    params: {
      expand: `team.schedule.${sched}`,
    },
  });

const gamesList = (id) =>
  axios.create({
    baseURL,
    params: {
      teamId: id,
      startDate: "2021-10-12",
      endDate: "2021-10-22",
    },
  });

const teamStats = axios.create({
  baseURL,
});

export { divisionStandings, game, gamesList, teamStats };

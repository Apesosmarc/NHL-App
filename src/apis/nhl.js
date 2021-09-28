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

const gamesList = (id = null, start = "2021-10-12", end = "2021-10-30") =>
  axios.create({
    baseURL,
    params: {
      teamId: id,
      startDate: start,
      endDate: end,
    },
  });

const teamStats = axios.create({
  baseURL,
});

export { divisionStandings, game, gamesList, teamStats };

import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import Standings from "./Standings";
import TeamHeader from "./TeamHeader";
import teams from "../data/teams";
import Stats from "./Stats";

const isLive = (game) => {
  // This Func compares the status code of the 'next' game and checks if it is live or not

  // Status code of nextGamegame
  const statusCode =
    game.data.teams[0].nextGameSchedule.dates[0].games[0].status
      .abstractGameState;

  if (statusCode === "Live" || statusCode === "Final") return true;
  else return false;
};

export default class App extends Component {
  state = {
    teamId: 5,
    team: teams[5],
    standings: [],
    nextGame: [],
    active: "false",
    schedule: [],
  };

  getData = async () => {
    console.log("fetch");
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game("next").get(`/teams/${this.state.teamId}`);
    const getSchedule = await gamesList(this.state.teamId).get("/schedule");

    this.setState({
      team: teams[this.state.teamId],
      standings: standings.data.records[this.state.team.covidDiv].teamRecords,
      nextGame: nextGame.data.teams[0],
      active: isLive(nextGame) === true ? true : false,
      schedule: getSchedule.data,
    });
  };

  componentDidMount = async () => {
    this.getData();
  };

  selectTeam = (teamId) => {
    this.setState({
      teamId: teamId,
      team: teams[teamId],
    });
    this.getData();
  };

  render() {
    console.log(this.state.schedule);
    return (
      <div className="container max-w-lg mx-auto">
        <div className="w-100 h-100">
          <TeamHeader
            standings={this.state.standings}
            team={teams[this.state.teamId]}
            nextGame={this.state.nextGame}
            active={this.state.active}
            schedule={this.state.schedule.dates}
            selectTeam={this.selectTeam}
          />
          <Standings
            standings={this.state.standings}
            active={this.state.active}
            selectTeam={this.selectTeam}
            teamId={this.state.teamId}
          />
          <Stats team={this.state.team} />
        </div>
      </div>
    );
  }
}

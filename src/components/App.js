import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import Standings from "./Standings";
import TeamHeader from "./TeamHeader";
import teams from "../data/teams";
import Stats from "./Stats";
import TeamText from "./TeamText";

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
    teamId: 25,
    team: teams[25],
    standings: [],
    nextGame: [],
    active: "false",
    schedule: [],
    division: [],
  };

  getData = async () => {
    console.log("fetch");
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game("next").get(`/teams/${this.state.teamId}`);
    const getSchedule = await gamesList(this.state.teamId).get("/schedule");

    this.setState({
      team: teams[this.state.teamId],
      division: standings.data.records[this.state.team.covidDiv].division.name,
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
    return (
      <div className="container max-w-lg mx-auto">
        <div>
          <TeamText team={this.state.team} />
          <TeamHeader
            standings={this.state.standings}
            team={this.state.team}
            nextGame={this.state.nextGame}
            active={this.state.active}
            schedule={this.state.schedule.dates}
            selectTeam={this.selectTeam}
          />
          <div className="py-4"> </div>
          <Standings
            standings={this.state.standings}
            active={this.state.active}
            selectTeam={this.selectTeam}
            teamId={this.state.teamId}
            division={this.state.division}
          />
          <div className="py-8"> </div>
          <Stats team={this.state.team} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import Standings from "./Standings";
import TeamHeader from "./TeamHeader";
import teams from "../data/teams";

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
    standings: [],
    teamId: 6,
    nextGame: [],
    prevGame: [],
    active: "false",
    schedule: [],
  };

  componentDidMount = async () => {
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game("next").get(`/teams/${this.state.teamId}`);
    const prevGame = await game("prev").get(`/teams/${this.state.teamId}`);
    const getSchedule = await gamesList(this.state.teamId).get("/schedule");

    this.setState({
      standings: standings.data.records[2].teamRecords,
      nextGame: nextGame.data.teams[0],
      prevGame: prevGame.data.teams[0],
      active: isLive(nextGame) === true ? true : false,
      schedule: getSchedule.data.dates,
    });
  };
  render() {
    return (
      <div className="container max-w-lg mx-auto">
        <div className="w-100 h-100">
          <TeamHeader
            standings={this.state.standings}
            team={teams[this.state.teamId]}
            nextGame={this.state.nextGame}
            prevGame={this.state.prevGame}
            active={this.state.active}
            schedule={this.state.schedule}
          />
          <Standings
            standings={this.state.standings}
            active={this.state.active}
          />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { divisionStandings, game } from "../apis/nhl";
import Standings from "./Standings";
import TeamHeader from "./TeamHeader";
import teams from "../data/teams";

export default class App extends Component {
  state = { standings: [], teamId: 6, nextGame: [] };

  componentDidMount = async () => {
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game.get(`/teams/${this.state.teamId}`);
    this.setState({
      standings: standings.data.records[2].teamRecords,
      nextGame: nextGame.data.teams[0],
    });
  };
  render() {
    return (
      <div className="container max-w-lg mx-auto">
        <div className="w-100 h-100 border-2 border-black">
          <TeamHeader
            standings={this.state.standings}
            team={teams[this.state.teamId]}
            nextGame={this.state.nextGame}
          />
          <Standings standings={this.state.standings} />
        </div>
      </div>
    );
  }
}

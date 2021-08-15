import React, { Component } from "react";
import nhl from "../apis/nhl";
import Standings from "./Standings";

export default class App extends Component {
  state = { standings: [] };
  componentDidMount = async () => {
    const standings = await nhl.get("/standings");

    const teams = await nhl.get("/teams");

    this.setState({
      standings: standings.data.records[2].teamRecords,
      teamJSON: teams.data.teams,
    });
  };
  render() {
    return (
      <div className="container max-w-lg mx-auto">
        <Standings standings={this.state.standings} />
      </div>
    );
  }
}

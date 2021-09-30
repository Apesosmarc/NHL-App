import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import TeamText from "./TeamText";
import TeamHeader from "./TeamHeader";
import Standings from "./Standings";
import StatsHeader from "./layout/StatsHeader";
import Stats from "./stats/Stats";
import Spinner from "./loading/Spinner";
// retrieves teamInfo with teamId as argument
import getTeamInfo from "../utils/getTeamInfo";
import { ChartDonutThresholdLabelOrientation } from "@patternfly/react-charts";

// import { isLive } from "../utils/isLive";

export default class App extends Component {
  state = {
    teamId: null,
    team: null,
    standings: [],
    nextGame: [],
    schedule: [],
    division: [],
    isLoading: true,
  };

  getData = async () => {
    // resets isLoading to true
    this.setState({
      isLoading: true,
    });
    console.log("fetch");
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game("next").get(`/teams/${this.state.teamId}`);
    const getSchedule = await gamesList(this.state.teamId).get("/schedule");

    setTimeout(() => this.setState({ isLoading: false }), 800);
    this.setState({
      team: getTeamInfo(this.state.teamId),
      division: standings.data.records[this.state.team.covidDiv].division.name,
      standings: standings.data.records[this.state.team.covidDiv].teamRecords,
      nextGame: nextGame.data.teams[0],
      schedule: getSchedule.data,
    });
  };

  // Sets props.id to state when URL is entered manually.
  componentDidMount = async () => {
    console.log(`compdidmount`);
    this.setState({
      teamId: this.props.id,
      team: getTeamInfo(this.props.id),
    });
    this.getData();
  };

  // Sets props.id to state passed down by RouteHandle.js + loads data
  componentWillReceiveProps(nextProps) {
    console.log("compWillReceiveProps");
    if (nextProps.id === this.state.teamId) {
      console.log("returned");
      return;
    }
    this.setState({
      teamId: nextProps.id,
      team: getTeamInfo(nextProps.id),
    });
    this.getData();
  }

  render() {
    return this.state.isLoading === false ? (
      <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div>
          <TeamText team={this.state.team} />
          <TeamHeader
            standings={this.state.standings}
            team={this.state.team}
            nextGame={this.state.nextGame}
            schedule={this.state.schedule.dates}
          />
          <div className="sm:py-8 py-2"> </div>
          <Standings
            standings={this.state.standings}
            currentTeam={this.state.team}
            division={this.state.division}
          />
          <StatsHeader team={this.state.team} />
          <Stats team={this.state.team} />
        </div>
      </div>
    ) : (
      <Spinner team={this.state.team} />
    );
  }
}

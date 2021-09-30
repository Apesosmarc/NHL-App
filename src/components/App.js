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
    // resets need to load on update
    this.setState({
      isLoading: true,
    });
    console.log("fetch");
    const standings = await divisionStandings.get("/standings");
    const nextGame = await game("next").get(`/teams/${this.state.teamId}`);
    const getSchedule = await gamesList(this.state.teamId).get("/schedule");

    setTimeout(() => this.setState({ isLoading: false }), 800);
    this.setState({
      division: standings.data.records[this.state.team.covidDiv].division.name,
      standings: standings.data.records[this.state.team.covidDiv].teamRecords,
      nextGame: nextGame.data.teams[0],
      schedule: getSchedule.data,
    });
  };

  // Sets props.id to state when this component actually unmounts.
  componentDidMount = async () => {
    this.setState({
      teamId: this.props.id,
      team: getTeamInfo(this.props.id),
    });
    this.getData();
  };

  // Conditionally renders props.id to state passed down by RouteHandle.js + loads data
  // This is necessary as this comp does not rerender when passed props.
  componentDidUpdate = (prevProps) => {
    if (prevProps.id === this.props.id) {
      return;
    }
    this.setState({
      teamId: this.props.id,
      team: getTeamInfo(this.props.id),
    });
    this.getData();
  };

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

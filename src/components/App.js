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
    teamId: this.props.id,
    team: getTeamInfo(this.props.id),
    standings: [],
    nextGame: [],
    schedule: [],
    division: [],
    isLoading: true,
  };

  getData = async () => {
    this.setState({ isLoading: true });
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

  componentDidMount = async () => {
    this.getData();
  };

  selectTeam = (teamId) => {
    if (teamId === this.state.team.id) return;
    this.setState({
      teamId: teamId,
      team: getTeamInfo(teamId),
    });
    this.getData();
  };

  render() {
    console.log("app loaded");
    return this.state.isLoading === false ? (
      <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div>
          <TeamText team={this.state.team} />
          <TeamHeader
            standings={this.state.standings}
            team={this.state.team}
            nextGame={this.state.nextGame}
            schedule={this.state.schedule.dates}
            selectTeam={this.selectTeam}
          />
          <div className="sm:py-8 py-2"> </div>
          <Standings
            standings={this.state.standings}
            selectTeam={this.selectTeam}
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

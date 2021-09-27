import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import Standings from "./Standings";
import TeamHeader from "./TeamHeader";
import teams from "../data/teams";
import Stats from "./stats/Stats";
import TeamText from "./TeamText";
import Spinner from "./loading/Spinner";

// import { isLive } from "../utils/isLive";

export default class App extends Component {
  state = {
    teamId: this.props.id,
    team: teams[this.props.id],
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
      team: teams[this.state.teamId],
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
      team: teams[teamId],
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
            active={this.state.active}
            schedule={this.state.schedule.dates}
            selectTeam={this.selectTeam}
          />
          <div className="sm:py-8 py-2"> </div>
          <Standings
            standings={this.state.standings}
            active={this.state.active}
            selectTeam={this.selectTeam}
            currentTeam={this.state.team}
            division={this.state.division}
          />
          <div className="pt-16 pb-8 flex content-center justify-center">
            <h1
              className="bottom-header sm:text-4xl"
              style={{
                borderBottom: `3px solid ${this.state.team.mainColor}`,
              }}
            >
              {this.state.team.name}
            </h1>
          </div>

          <Stats team={this.state.team} />
        </div>
      </div>
    ) : (
      <Spinner team={this.state.team} />
    );
  }
}

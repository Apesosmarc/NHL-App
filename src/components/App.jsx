import React, { Component } from "react";
import { divisionStandings, game, gamesList } from "../apis/nhl";
import TeamText from "./TeamText";
import TeamHeader from "./TeamHeader";
import Standings from "./Standings";
import StatsHeader from "./layout/StatsHeader";
import Spinner from "./loading/Spinner";
// retrieves teamInfo with teamId as argument
import getTeamInfo from "../utils/getTeamInfo";
import { getDatesFromToday } from "../utils/dateConverter";

export default class App extends Component {
  state = {
    teamId: null,
    team: null,
    standings: [],
    nextGame: [],
    schedule: [],
    division: [],
    isLoading: true,
    error: null,
  };

  getData = async () => {
    // resets need to load on update
    this.setState({
      isLoading: true,
    });

    // async auto invoke that fetches data but sets state error if one of the requests comes back error
    (async () => {
      try {
        const standings = await divisionStandings.get("/standings/now");

        this.setState({
          noGames: getSchedule.data.dates.length < 1 ? true : false,
          division:
            standings.data.records[this.state.team.covidDiv].division.name,
          standings:
            standings.data.records[this.state.team.covidDiv].teamRecords,
          nextGame: nextGame.data.teams[0],
          schedule: getSchedule.data,
        });
      } catch (error) {
        this.setState({ error: error.message });
      }
    })();

    setTimeout(() => this.setState({ isLoading: false }), 500);
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
    if (this.state.error) {
      return <div className="text-red-500">{this.state.error}</div>;
    } else {
      return this.state.isLoading === false ? (
        <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
          <div>
            {this.state.noGames ? (
              <React.Fragment>
                <TeamText team={this.state.team} />
                <div className="text-center mt-12">
                  No Games Today -- More to do coming soon
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </div>
        </div>
      ) : (
        <Spinner team={this.state.team} />
      );
    }
  }
}

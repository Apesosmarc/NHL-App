import React, { Component } from "react";
import TeamText from "./TeamText";
import { Standings } from "./Standings";
import { dummy_standings } from "../data/dummy_standings";
import Spinner from "./loading/Spinner";
// retrieves teamInfo with teamId as argument
import getTeamInfo from "../utils/getTeamInfo";

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
        this.setState({
          standings: dummy_standings,
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
            <React.Fragment>
              <TeamText team={this.state.team} />

              <Standings
                standings={dummy_standings}
                currentTeam={this.state.team}
                division={this.state.division}
              />
            </React.Fragment>
          </div>
        </div>
      ) : (
        <Spinner team={this.state.team} />
      );
    }
  }
}

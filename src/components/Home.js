import React, { Component } from "react";
import { dummy_schedule } from "../data/dummy_schedule";
import { gamesList } from "../apis/nhl";
import GameGrid from "./layout/GameGrid";
import DateHeader from "./dates/DateHeader";
import { getDatesFromToday } from "../utils/dateConverter";
import Spinner from "./loading/Spinner";
import { Standings } from "./Standings";
import { dummy_standings } from "../data/dummy_standings";

export default class Home extends Component {
  state = {
    todaysGames: [],
    tomorrowsGames: [],
    data: null,
  };

  checkGames = (arr) => {
    console.log(arr);
    if (arr.length >= 1) return true;
    else {
      return false;
    }
  };

  getData = async () => {
    (async () => {
      try {
        this.setState({
          todaysGames: dummy_schedule.gameWeek[1].games,
          tomorrowsGames: dummy_schedule.gameWeek[2].games,
          data: true,
          standings: dummy_standings,
        });
        return;
      } catch (error) {
        this.setState({});
      }
    })();
  };

  componentDidMount = async () => {
    this.getData();
  };

  render() {
    if (!this.state.data) return <Spinner />;

    return (
      <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <img
          className="sm:w-56 sm:h-77 mx-auto my-auto py-8"
          src="./logos/nhl_logo_dark.svg"
          alt="NHL Trademark logo"
        ></img>
        <p className="text-red-500 italic">
          Since the public API used has been depreciated & NHL is off regular
          season - API data has been archived at October 10, 2024
        </p>

        {this.state.todaysGames.length < 1 ? (
          <div className="text-center mt-12">No Games Today</div>
        ) : (
          <React.Fragment>
            <DateHeader game={this.state.todaysGames[0]} />
            <GameGrid schedule={this.state.todaysGames} team={false} />
            <div className="py-6"></div>
          </React.Fragment>
        )}

        {this.state.tomorrowsGames.length < 1 ? (
          <div className="text-center mt-12 mb-12">
            No Games Tomorrow -- More coming soon
          </div>
        ) : (
          <React.Fragment>
            <DateHeader game={this.state.tomorrowsGames[0]} />
            <GameGrid schedule={this.state.tomorrowsGames} team={false} />
            <div className="py-6"></div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

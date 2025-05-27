import React, { Component } from "react";
import { dummy_schedule } from "../data/dummy_schedule";
import { gamesList } from "../apis/nhl";
import GameGrid from "./layout/GameGrid";
import DateHeader from "./dates/DateHeader";
import { getDatesFromToday } from "../utils/dateConverter";
import Spinner from "./loading/Spinner";

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
    console.log(this.state);
    if (!this.state.data) return <Spinner />;

    return (
      <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <img
          className="sm:w-56 sm:h-56 w-48 h-48 mx-auto my-auto py-8"
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133.svg"
          alt="NHL Trademark logo"
        ></img>

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

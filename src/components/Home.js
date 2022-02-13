import React, { Component } from "react";

import { gamesList } from "../apis/nhl";
import GameGrid from "./layout/GameGrid";
import DateHeader from "./dates/DateHeader";
import { getDatesFromToday } from "../utils/dateConverter";
import Spinner from "./loading/Spinner";

export default class Home extends Component {
  state = {
    todaysGames: [],
    tomorrowsGame: [],
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
        // fetches games from today by 1, start = todaysDate, end = tomorrows
        const [start, end] = getDatesFromToday(1);
        const getTodaysGames = await gamesList(start, start, null).get(
          "/schedule"
        );
        const getTomorrowsGames = await gamesList(end, end, null).get(
          "/schedule"
        );

        // if there are no games, this sets games to an empty arr instead of resulting in infinite spinner anim
        this.checkGames(getTodaysGames.data.dates)
          ? this.setState({
              todaysGames: getTodaysGames.data.dates[0].games,
              data: true,
            })
          : this.setState({ todaysGames: [], data: true });

        this.checkGames(getTomorrowsGames.data.dates)
          ? this.setState({
              tomorrowsGame: getTomorrowsGames.data.dates[0].games,
              data: true,
            })
          : this.setState({ tomorrowsGame: [], data: true });
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

        {this.state.tomorrowsGame.length < 1 ? (
          <div className="text-center mt-12 mb-12">
            No Games Tomorrow -- More coming soon
          </div>
        ) : (
          <React.Fragment>
            <DateHeader game={this.state.tomorrowsGame[0]} />
            <GameGrid schedule={this.state.tomorrowsGame} team={false} />
            <div className="py-6"></div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

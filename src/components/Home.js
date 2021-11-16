import React, { Component } from "react";

import { gamesList } from "../apis/nhl";
import GameGrid from "./layout/GameGrid";
import DateHeader from "./dates/DateHeader";
import { getGamesFromToday } from "../utils/dateConverter";
import Spinner from "./loading/Spinner";

export default class Home extends Component {
  state = {
    todaysGames: [],
    tomorrowsGame: [],
    data: null,
  };

  getData = async () => {
    const [start, end] = getGamesFromToday(1);
    const getTodaysGames = await gamesList(null, start).get("/schedule");

    const getTomorrowsGames = await gamesList(null, end).get("/schedule");

    this.setState({
      todaysGames: getTodaysGames.data.dates[0].games,
      tomorrowsGames: getTomorrowsGames.data.dates[0].games,
      data: true,
    });
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
        <DateHeader game={this.state.todaysGames[0]} />
        <GameGrid
          schedule={this.state.todaysGames}
          selectTeam={() => console.log("hi")}
          team={false}
        />
        <DateHeader game={this.state.tomorrowsGames[0]} />
        <GameGrid
          schedule={this.state.tomorrowsGames}
          selectTeam={() => console.log("hi")}
          team={false}
        />
        <div className="py-6"></div>
      </div>
    );
  }
}

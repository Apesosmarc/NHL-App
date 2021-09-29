import React, { Component } from "react";

import { gamesList } from "../apis/nhl";
import GameGrid from "./layout/GameGrid";
import DateHeader from "./dates/DateHeader";

export default class Home extends Component {
  state = {
    todaysGames: [],
    tomorrowsGame: [],
    data: null,
  };

  getData = async () => {
    const getTodaysGames = await gamesList(
      null,
      "2021-10-12",
      "2021-10-12"
    ).get("/schedule");
    const getTomorrowsGames = await gamesList(
      null,
      "2021-10-13",
      "2021-10-13"
    ).get("/schedule");

    this.setState({
      todaysGames: getTodaysGames.data.dates[0].games,
      tomorrowsGames: getTomorrowsGames.data.dates[0].games,
      data: true,
    });
  };

  componentDidMount = async () => {
    console.log("mounted");
    this.getData();
  };

  render() {
    if (!this.state.data) return <div></div>;
    return (
      <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <img
          className="sm:w-56 sm:h-56 w-32 h-32 mx-auto my-auto pt-8"
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

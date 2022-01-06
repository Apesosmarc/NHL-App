import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

export default function SwitchContainer({ team }) {
  //returns favorite id in storage
  const getFavorite = () => {
    return JSON.parse(localStorage.getItem("favorite")).id;
  };

  //parses localStorage to see if user has a team favorited
  const hasFavorite = () => {
    if (localStorage.getItem("favorite")) {
      return true;
    }
    return false;
  };

  // checks to see if favorited team in storage matches current team
  const favorited = hasFavorite() && team.id === getFavorite() ? true : false;
  const [enabled, setEnabled] = useState(favorited);

  useEffect(() => {
    console.log(enabled);
    sessionStorage.length === 0 && sessionStorage.setItem("visited", "true");
    if (enabled) {
      return localStorage.setItem(
        "favorite",
        JSON.stringify({ enabled: enabled, id: team.id })
      );
    }
    // if user toggles off favorite, remove localStorage entirely.
    if (!enabled && favorited) return localStorage.clear();
  }, [enabled, favorited, team.id]);

  const backGroundColor = enabled ? team.mainColor : "hsl(228, 34%, 66%)";

  return (
    <div className="home-button-bar bg-darkBg">
      <Link to="/home">
        <button
          className="all-games-btn"
          style={{ backgroundColor: `${team.mainColor}` }}
        >
          All Games
        </button>
      </Link>
      <div className="flex flex-col">
        <h2
          className="favorite-btn-header text-md"
          style={{ color: `${team.mainColor}` }}
          data-tip={`Auto-redirect to ${team.name} team on load`}
        >
          Favorite <small className="text-darkText">(?)</small>
        </h2>
        <ReactTooltip />
        <Switch
          checked={enabled}
          onChange={setEnabled}
          style={{ background: `${backGroundColor}` }}
          className={`favorite-btn`}
        >
          <br />
          <span
            aria-hidden="true"
            className={`${enabled ? "selected" : "deselected"}
             favorite-btn-slider`}
          />
        </Switch>
      </div>
    </div>
  );
}

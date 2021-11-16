import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

export default function SwitchContainer({ team }) {
  const getFavorite = () => {
    return JSON.parse(localStorage.getItem("favorite")).id;
  };

  const hasFavorite = () => {
    if (localStorage.getItem("favorite")) {
      return true;
    }
    return false;
  };

  const favorited = hasFavorite() && team.id === getFavorite() ? true : false;
  const [enabled, setEnabled] = useState(favorited);

  useEffect(() => {
    sessionStorage.length === 0 && sessionStorage.setItem("visited", "true");
    if (enabled) {
      return localStorage.setItem(
        "favorite",
        JSON.stringify({ enabled: enabled, id: team.id })
      );
    }
    if (!enabled && favorited) return localStorage.clear();
  }, [enabled, favorited, team.id]);

  const backGroundColor = enabled ? team.mainColor : "hsl(228, 34%, 66%)";

  return (
    <div className="py-4 bg-darkBg flex justify-between items-center px-7 sm:px-12 lg:px-56 mx-auto lg:order-first">
      <Link to="/">
        <button
          className="px-4 py-2 rounded text-lg self-center  mt-2"
          style={{ backgroundColor: `${team.mainColor}` }}
        >
          All Games
        </button>
      </Link>
      <div className="flex flex-col">
        <h2
          className="mb-2 text-md subtitle font-bold"
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
          className={`relative inline-flex items-center h-7 w-16 rounded-full border-black`}
          data-tip={`Auto-redirect to ${team.name} on load`}
        >
          <br />
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
             bg-lightGray inline-block h-8 w-8 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>
    </div>
  );
}

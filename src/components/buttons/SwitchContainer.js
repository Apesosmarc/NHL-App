import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

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

  const favorited = hasFavorite() && team.id == getFavorite() ? true : false;
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
  }, [enabled]);

  const backGroundColor = enabled ? team.mainColor : "hsl(228, 34%, 66%)";
  return (
    <div className="py-4 bg-darkBg flex justify-end px-7 sm:px-28 lg:px-56 mx-auto lg:order-first">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        style={{ background: `${backGroundColor}` }}
        className={`relative inline-flex items-center h-7 w-16 rounded-full border-black`}
      >
        <br />
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
             bg-lightGray inline-block h-8 w-8 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
}

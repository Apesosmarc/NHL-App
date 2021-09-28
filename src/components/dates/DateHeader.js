import React from "react";

import { formatDate } from "../../utils/dateConverter";

export default function DateHeader({ game }) {
  const dateFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="mx-auto lg:py-12 text-center">
      <h2 className="text-2xl">
        {formatDate(game.gameDate, dateFormatOptions)}
      </h2>
    </div>
  );
}

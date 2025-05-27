import React from "react";

import { formatDate } from "../../utils/dateConverter";

export default function DateHeader({ game }) {
  // options obj passed to custom formatDate func -> specifies desired output to be: 'full month name', 'day number', 'year number'
  const dateFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="mx-auto lg:py-12 py-8 text-center">
      <h2 className="text-2xl">
        {formatDate(game.startTimeUTC, dateFormatOptions)}
      </h2>
    </div>
  );
}

import React from "react";

export default function Spinner({ team }) {
  const mainColor = team ? team.mainColor : "gray";
  return (
    <div className="container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto flex justify-center relative">
      <div className="loader-container mt-48 flex flex-col justify-center content-center">
        {!team ? null : (
          <img className="teamcard-logo" src={team.smallLogo} alt={team.name} />
        )}
        <svg className="animate-spin h-24 w-12" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="white"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill={mainColor}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

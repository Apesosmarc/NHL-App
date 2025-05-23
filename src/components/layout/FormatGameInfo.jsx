import React from "react";
import ScoreDisplay from "../games/ScoreDisplay.jsx";
import GameDate from "../games/GameDate.jsx";
import LiveScore from "../games/LiveScore.jsx";

export default function FormatGameInfo({
  gameInfo,
  gameDate,
  gameTime,
  team,
  gameStatus,
  fullColumn,
}) {
  const selectGameInfo = (status) => {
    switch (status) {
      case "Final":
        return (
          <ScoreDisplay gameDate={gameDate} gameInfo={gameInfo} team={team} />
        );
      case "Preview":
        return (
          <GameDate
            fullColumn={fullColumn}
            gameInfo={gameInfo}
            gameDate={gameDate}
            gameTime={gameTime}
            gameVenue={gameInfo.venue.name}
          />
        );
      case "Live":
        return <LiveScore gameInfo={gameInfo} />;
      default:
        return <div>loading...</div>;
    }
  };

  return <React.Fragment>{selectGameInfo(gameStatus)}</React.Fragment>;
}

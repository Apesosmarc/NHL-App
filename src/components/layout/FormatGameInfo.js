import React from "react";
import ScoreDisplay from "../games/ScoreDisplay";
import GameDate from "../games/GameDate";
import LiveScore from "../games/LiveScore";

export default function FormatGameInfo({
  gameInfo,
  gameDate,
  gameTime,
  team,
  gameStatus,
  fullColumn,
}) {
  const selectGameInfo = (status) => {
    switch (status.toLowerCase()) {
      case "off":
        return (
          <ScoreDisplay gameDate={gameDate} gameInfo={gameInfo} team={team} />
        );
      case "preview":
        return (
          <GameDate
            fullColumn={fullColumn}
            gameInfo={gameInfo}
            gameDate={gameDate}
            gameTime={gameTime}
            gameVenue={gameInfo.venue.name}
          />
        );
      case "live":
        return <LiveScore gameInfo={gameInfo} />;
      default:
        return <div>loading...</div>;
    }
  };

  return <React.Fragment>{selectGameInfo(gameStatus)}</React.Fragment>;
}

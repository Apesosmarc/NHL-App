import React from "react";
import ScoreDisplay from "../games/ScoreDisplay";
import GameDate from "../games/GameDate";
import LiveScore from "../games/LiveScore";

export default function FormatGameInfo({
  gameInfo,
  gameDate,
  gameTime,
  gameVenue,
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
    }
  };

  return <React.Fragment>{selectGameInfo(gameStatus)}</React.Fragment>;
}

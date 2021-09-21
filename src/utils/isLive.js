const isLive = (game) => {
  // This Func compares the status code of the 'next' game and checks if it is live or not

  // Status code of nextGamegame
  const statusCode =
    game.data.teams[0].nextGameSchedule.dates[0].games[0].status
      .abstractGameState;

  if (statusCode === "Live" || statusCode === "Final") return true;
  else return false;
};

export { isLive };

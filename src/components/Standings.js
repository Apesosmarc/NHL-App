import React from "react";
import teams from "../data/teams";

const Standings = ({ standings, selectTeam, teamId, division }) => {
  const divisionStandings = standings.map((teamRank) => {
    // Selects team data for each team in division
    const team = teams[teamRank.team.id];
    const outlineTeam =
      team.id == teamId ? `5px solid ${team.mainColor}` : "none";
    return (
      <tr
        className="font-bold"
        style={{
          border: `${outlineTeam}`,
          backgroundColor: "var(--dark-card)",
        }}
        key={team.name}
        onClick={() => selectTeam(team.id)}
      >
        <td className="">
          <img
            src={team.smallLogo}
            alt={`${team.name} logo`}
            onClick={() => selectTeam(team.id)}
            className="mb-2 transform hover:opacity-50"
          />
        </td>
        <td>{teamRank.points}</td>
        <td>{teamRank.leagueRecord.wins}</td>
        <td>{teamRank.leagueRecord.losses}</td>
        <td>{teamRank.gamesPlayed}</td>
        <td>{teamRank.streak.streakCode}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h1 className="text-center text-2xl pb-2 sm:text-3xl">{division}</h1>
      <h1 className="text-center text-xl">2020-2021 Season</h1>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>OTL</th>
            <th>STR</th>
          </tr>
        </thead>
        <tbody>{standings.length !== 0 && divisionStandings}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Standings;

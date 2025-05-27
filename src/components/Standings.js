import React from "react";
import getTeamInfo from "../utils/getTeamInfo";
import { Link } from "react-router-dom";
import teamAbrev from "../data/teamAbrev";

export const Standings = ({ standings, currentTeam, division }) => {
  // Renders the Table Body
  const divisionStandings = standings.standings.map((teamRank) => {
    const team = getTeamInfo(
      teamAbrev[teamRank.teamAbbrev.default.toLowerCase()]
    );
    const teamName = teamRank.teamName.default;
    // Selects team data for each team in division
    return (
      <tr
        className="font-bold"
        style={{
          backgroundColor: "var(--dark-card)",
        }}
        key={team.name}
      >
        <td>
          <Link to={`/${team.abrev}`}>
            <img
              src={team.smallLogo}
              alt={`${teamName} logo`}
              className="table-logo transform hover:opacity-30"
            />
          </Link>
        </td>
        <td>{teamRank.points}</td>
        <td>{teamRank.wins}</td>
        <td>{teamRank.losses}</td>
        <td>{teamRank.gamesPlayed}</td>
        <td>{teamRank.streakCode}</td>
      </tr>
    );
  });

  // Renders Table Header and inputs iterated from array above.
  return (
    <React.Fragment>
      <h1 className="text-center text-xl">Overall Standings </h1>
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

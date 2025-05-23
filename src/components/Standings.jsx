import React from "react";
import getTeamInfo from "../utils/getTeamInfo";
import { Link } from "react-router-dom";

const Standings = ({ standings, currentTeam, division }) => {
  // Renders the Table Body
  const divisionStandings = standings.map((teamRank) => {
    // Selects team data for each team in division
    const team = getTeamInfo(teamRank.team.id);
    const outlineTeam =
      team.id === currentTeam.id ? `5px solid ${team.mainColor}` : "none";
    return (
      <tr
        className="font-bold"
        style={{
          border: `${outlineTeam}`,
          backgroundColor: "var(--dark-card)",
        }}
        key={team.name}
      >
        <td>
          <Link to={`/${team.abrev}`}>
            <img
              src={team.smallLogo}
              alt={`${team.name} logo`}
              className="table-logo transform hover:opacity-30"
            />
          </Link>
        </td>
        <td>{teamRank.points}</td>
        <td>{teamRank.leagueRecord.wins}</td>
        <td>{teamRank.leagueRecord.losses}</td>
        <td>{teamRank.gamesPlayed}</td>
        <td>{teamRank.streak.streakCode}</td>
      </tr>
    );
  });

  // Renders Table Header and inputs iterated from array above.
  return (
    <React.Fragment>
      <h1 className="text-center text-2xl pb-2 sm:text-3xl">{division}</h1>
      <h1 className="text-center text-xl">2021-2022 Season</h1>
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

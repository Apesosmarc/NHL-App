import React from "react";
import teams from "../data/teams";

const Standings = ({ standings, selectTeam, teamId, division }) => {
  const divisionStandings = standings.map((teamRank) => {
    const team = teams[teamRank.team.id];
    const outlineTeam =
      team.id == teamId ? `5px solid ${team.mainColor}` : "none";
    return (
      <tr
        className="font-bold teamcard"
        style={{
          border: `${outlineTeam}`,
        }}
        key={team.name}
      >
        <td className="">
          <img
            src={team.smallLogo}
            alt=""
            onClick={() => selectTeam(team.id)}
          />
        </td>
        <td>{teamRank.gamesPlayed}</td>
        <td>{teamRank.leagueRecord.wins}</td>
        <td>{teamRank.leagueRecord.losses}</td>
        <td>{teamRank.leagueRecord.ot}</td>
        <td>{teamRank.streak.streakCode}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <h1 className="text-center text-xl pb-2">{division}</h1>
      <h1 className="text-center text-xl pb-4">2020-2021 Season</h1>
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

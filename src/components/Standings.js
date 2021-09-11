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
        <td className="px-4 py-2">
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
      <table className="table-auto min-w-full">
        <thead>
          <tr>
            <th className="">Team</th>
            <th className="">GP</th>
            <th className="">W</th>
            <th className="">L</th>
            <th className="">OTL</th>
            <th className="">STR</th>
          </tr>
        </thead>
        <tbody>{standings.length !== 0 && divisionStandings}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Standings;

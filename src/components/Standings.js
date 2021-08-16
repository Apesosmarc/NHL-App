import React, { Component, useEffect } from "react";
import teams from "../data/teams";

const Standings = ({ standings, teamJSON }) => {
  const divisionStandings = standings.map((teamRank) => {
    const team = teams[teamRank.team.id];
    return (
      <tr
        className="text-white font-bold"
        style={{ backgroundColor: `${team.mainColor}` }}
        key={team.name}
      >
        <td className="px-4 py-2 sm:px-8 sm:py-4">
          <img src={team.smallLogo} alt="" />
        </td>
        <td className="px-4 py-2">{teamRank.gamesPlayed}</td>
        <td className="px-4 py-2">{teamRank.leagueRecord.wins}</td>
        <td className="px-4 py-2">{teamRank.leagueRecord.losses}</td>
        <td className="px-4 py-2">{teamRank.leagueRecord.ot}</td>
        <td className="px-4 py-2">{teamRank.streak.streakCode}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table className="table-auto min-w-sm shadow-lg bg-gray-100 ">
        <thead>
          <tr>
            <th className="border text-left px-4 py-2">Team</th>
            <th className="border text-left px-4 py-2">GP</th>
            <th className="border text-left px-4 py-2">W</th>
            <th className="border text-left px-4 py-2">L</th>
            <th className="border text-left px-4 py-2">OTL</th>
            <th className="border text-left px-4 py-2">Streak</th>
          </tr>
        </thead>
        <tbody>{standings.length != 0 && divisionStandings}</tbody>
      </table>
    </React.Fragment>
  );
};

export default Standings;

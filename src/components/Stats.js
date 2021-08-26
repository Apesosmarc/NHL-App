import React, { useEffect, useState } from "react";
import { teamStats } from "../apis/nhl";
import DoughnutChart from "./DoughnutChart";

export default function Stats({ team }) {
  const [stats, setStats] = useState("");
  const fowAvg = 49.98;
  const pkAvg = 79.95;
  const ppAvg = 17.05;

  useEffect(() => {
    const getStats = async () => {
      const response = await teamStats.get(`/teams/${team.id}/stats`);

      setStats(response.data.stats[0].splits[0].stat);
    };
    getStats();
  }, []);

  return !stats ? (
    <div>Loading...</div>
  ) : (
    <div class="divide-y-2 divide-solid divide-gray-200">
      <DoughnutChart
        label={"Faceoff Win Percentage"}
        stats={stats.faceOffWinPercentage}
        team={team}
        title={"FOW"}
        average={fowAvg}
      />
      <DoughnutChart
        label={"Penalty Kill Percentage"}
        stats={stats.penaltyKillPercentage}
        team={team}
        title={"PK"}
        average={pkAvg}
      />
      <DoughnutChart
        label={"Powerplay Percentage"}
        stats={stats.powerPlayPercentage}
        team={team}
        title={"PP"}
        average={ppAvg}
      />
    </div>
  );
}

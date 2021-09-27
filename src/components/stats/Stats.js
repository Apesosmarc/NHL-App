import React, { useEffect, useState } from "react";
import { teamStats } from "../../apis/nhl";
import DoughnutChart from "./DoughnutChart";

export default function Stats({ team }) {
  const [stats, setStats] = useState("");
  const fowAvg = 49.98;
  const pkAvg = 79.95;
  const ppAvg = 17.05;

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await teamStats.get(`/teams/${team.id}/stats`);

        setStats(response.data.stats[0].splits[0].stat);
      } catch {
        setStats(false);
      }
    };

    getStats();
  }, [team.id]);

  // Seattle has yet to play a season = no stats
  return stats === false ? (
    <div className="mx-auto text-center mb-12">
      Seattle Kraken Stats Coming Soon :)
    </div>
  ) : (
    <div class="divide-y-2 divide-solid divide-gray-200 sm:divide-none sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:grid pb-20">
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

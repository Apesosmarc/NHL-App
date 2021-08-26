import React from "react";
import { ChartDonut } from "@patternfly/react-charts";

const DoughnutChart = ({ title, label, stats, average, team }) => {
  const statsNum = parseFloat(stats);
  const diff = 100 - statsNum;
  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold">{label}</h2>
      <ChartDonut
        colorScale={[`${team.mainColor}`, "#F3F4F6"]}
        ariaDesc="NHL teamStats"
        constrainToVisibleArea={true}
        data={[
          { x: "Bruins", y: statsNum },
          { x: "remainder", y: diff },
        ]}
        subTitle={title}
        title={`${stats}%`}
        width={350}
      />
      <h2 class="text-lg">League Average: {`${average}%`}</h2>
    </div>
  );
};

export default DoughnutChart;

import React from "react";
import { ChartDonut } from "@patternfly/react-charts";
import { useEffect } from "react";

const DoughnutChart = ({ title, label, stats, average, team }) => {
  const statsNum = parseFloat(stats);
  const diff = 100 - statsNum;

  // changes styles via dom, patternfly library not accepting styles.
  useEffect(() => {
    const tspans = [...document.querySelectorAll("tspan")];
    tspans.forEach((tspan) => (tspan.style.fill = "hsl(0, 0%, 100%)"));
  }, []);

  return (
    <div className="text-center py-10  sm:mx-auto">
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
        width={150}
      />
      <h2 className="text-lg">League Average: {`${average}%`}</h2>
    </div>
  );
};

export default DoughnutChart;

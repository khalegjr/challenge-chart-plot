import {
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import React from "react";
import { Line } from "react-chartjs-2";

import styled from "styled-components";
import { ChartData } from "../../services/chartData";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  TimeScale,
  Colors
);

interface datasets {
  datasets: Array<ChartData>;
}

interface Iprops {
  // data: IData;
  data: Array<ChartData>;
  options: Object;
}

const ChartDiv = styled.div`
  margin-top: 1em;
  width: 100%;
`;

const Chart: React.FC<Iprops> = ({ data, options }) => {
  console.log(data);

  // Convert to Chart.js dataset format
  const datasets = {
    datasets: data,
  };
  console.log(datasets);

  const x = {
    // labels: ["0", "1"],
    datasets: [
      {
        label: "linux",
        data: [
          {
            x: "1519862400000",
            y: 0.1,
          },
          {
            x: "1519862400000",
            y: 0.2,
          },
        ],
      },
      {
        label: "mac",
        data: [
          {
            x: "1519862400000",
            y: 1.3,
          },
          {
            x: "1519862400000",
            y: 0.9,
          },
        ],
      },
    ],
  };

  return (
    <ChartDiv data-testid="chart-testid">
      <Line data={datasets} options={options} style={{ height: "500px" }} />
    </ChartDiv>
  );
};

export default Chart;

import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { FactionGraph } from '../types';

export interface ColumnNegativesChartProps {
  factionGraphs: FactionGraph[];
}

export const ColumnNegativesChart: React.FC<ColumnNegativesChartProps> = ({
  factionGraphs,
}) => {
  const options = {
    chart: {
      height: 450,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -10,
              to: -2,
              color: '#F15B46',
            },
            {
              from: -2,
              to: 0,
              color: '#FEB019',
            },
          ],
        },
        columnWidth: '80%',
      },
    },
    xaxis: {
      categories: ['DIE GRÜNEN', 'DIE LINKE', 'AFD', 'SPD', 'CDU/CSU', 'FDP'],
      labels: {
        rotate: -90,
      },
    },
    yaxis: {
      title: {
        text: 'Sentiment',
      },
    },
  };

  const series = [
    {
      name: 'Sentiments',
      data: [0.8, 2.5, -0.7, -2.7, 0.5, 1],
    },
  ];
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={450}
      />
    </>
  );
};

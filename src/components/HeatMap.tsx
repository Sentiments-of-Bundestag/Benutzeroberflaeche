import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { FactionGraph } from '../types';
import { createApexSeries } from '../utils/apex';

export interface HeatMapProps {
  factionGraphs: FactionGraph[];
}

export const HeatMap: React.FC<HeatMapProps> = ({ factionGraphs }) => {
  const options = {
    chart: {
      height: 450,
      type: 'heatmap',
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        colorScale: {
          ranges: [
            {
              from: -3,
              to: -1.5,
              name: 'low',
              color: '#FF0000',
            },
            {
              from: -1.5,
              to: 0,
              name: 'medium',
              color: '#FFB200',
            },
            {
              from: 0,
              to: 1.5,
              name: 'high',
              color: '#128FD9',
            },
            {
              from: 1.5,
              to: 3,
              name: 'extrem',
              color: '#00A100',
            },
          ],
        },
      },
    },
  };

  const series = createApexSeries(factionGraphs);

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={450}
      />
    </>
  );
};

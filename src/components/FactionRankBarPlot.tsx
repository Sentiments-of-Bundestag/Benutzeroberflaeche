import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Faction, FactionGraph, FactionRanked } from '../types';

export interface FactionRankBarPlotProps {
  factionRanks: FactionRanked[];
}

export const FactionRankBarPlot: React.FC<FactionRankBarPlotProps> = ({
  factionRanks,
}) => {
  const colors = [
    {
      factionId: 'F002', // DIE LINKE
      color: 'hsl(279,100%,50%)',
      rank: 0,
    },
    {
      factionId: 'F001', // SPD
      color: 'hsl(105,70%,50%)',
      rank: 1,
    },
    {
      factionId: 'F003', // BÜNDNIS90/DIE GRÜNEN
      color: 'hsl(0,100%,50%)',
      rank: 2,
    },
    {
      factionId: 'F000', // CDU/CSU
      color: 'hsl(52,100%,50%)',
      rank: 3,
    },
    {
      factionId: 'F005', // FDP
      color: 'hsl(0,0%,0%)',
      rank: 4,
    },
    {
      factionId: 'F004', // AfD
      color: 'hsl(211,100%,50%)',
      rank: 5,
    },
  ];

  const data = factionRanks.map((node) => {
    const colorObj = colors.find((color) => color.factionId === node.factionId);
    const defaultColor = 'hsl(0, 0, 0)';

    return {
      faction: node.name,
      rank: node.rank,
      color: colorObj || defaultColor,
    };
  });
  console.log(data);

  return (
    <div style={{ height: 600 }}>
      <ResponsiveBar
        data={data}
        keys={['rank']}
        indexBy="faction"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ datum: 'data.color' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        enableLabel={false}
        labelSkipWidth={14}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

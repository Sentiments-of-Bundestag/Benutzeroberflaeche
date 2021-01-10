import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Faction } from '../types';

export interface FractionPieProps {
  factions: Faction[];
}

export const FactionPie: React.FC<FractionPieProps> = ({ factions }) => {
  // TODO: adjust color
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

  const data = factions.map((faction) => {
    const colorObj = colors.find(
      (color) => color.factionId === faction.factionId,
    );
    const defaultColor = 'hsl(0, 0, 0)';
    const defaultRank = -1;
    return {
      id: faction.name,
      label: faction.name,
      value: faction.size,
      color: colorObj ? colorObj.color : defaultColor,
      rank: colorObj ? colorObj.rank : defaultRank,
    };
  });
  data.sort((a, b) => {
    return b.rank - a.rank;
  });

  // @ts-ignore
  const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
    let total = 0;
    dataWithArc.forEach((d: { value: number }) => {
      total += d.value;
    });

    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: '60px',
          fontWeight: 'bold',
        }}
      >
        {`${total}`}
      </text>
    );
  };

  return (
    <div style={{ height: 500 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 20, left: 80 }}
        startAngle={105}
        endAngle={-105}
        sortByValue={false}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={10}
        colors={{ datum: 'data.color' }}
        borderWidth={2}
        borderColor={{ theme: 'grid.line.stroke' }}
        enableRadialLabels={true}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabel="value"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor={{ theme: 'background' }}
        layers={[
          'slices',
          'sliceLabels',
          'radialLabels',
          'legends',
          CenteredMetric,
        ]}
      />
    </div>
  );
};

import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Faction } from '../types';

export interface FractionPieProps {
  factions: Faction[];
}

export const FactionPie: React.FC<FractionPieProps> = ({ factions }) => {
  const colors = [
    {
      factionId: 'F002', // DIE LINKE
      color: '#C7017F',
      rank: 0,
    },
    {
      factionId: 'F001', // SPD
      color: '#E50051',
      rank: 1,
    },
    {
      factionId: 'F003', // BÜNDNIS90/DIE GRÜNEN
      color: '#009879',
      rank: 2,
    },
    {
      factionId: 'F000', // CDU/CSU
      color: '#706F6F',

      rank: 3,
    },
    {
      factionId: 'F005', // FDP
      color: '#FFED00',
      rank: 4,
    },
    {
      factionId: 'F004', // AfD
      color: '#0085CC',
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

  const factionList = [...factions];
  factionList.sort((a, b) => b.size - a.size);
  return (
    <>
      <h2>Zusammensetzung des Bundestages</h2>
      <p className="text-justify">
        Der Bundestages bestand während der Legislaturperiode aus den foldenden{' '}
        <b>{factionList.length}</b> Parteien:
        <ul>
          {factionList.map((faction) => (
            <li key={faction.factionId}>
              <b>{faction.name}</b> mit <b>{faction.size}</b> Stimmen
            </li>
          ))}
        </ul>
        Im folgenden Pie-Chart ist die Sitzverteilung visualisiert.
      </p>
      <div style={{ height: 500 }}>
        <ResponsivePie
          theme={{
            fontSize: 18,
          }}
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
          enableSliceLabels={true}
          sliceLabelsRadiusOffset={0.5}
          sliceLabel="value"
          sliceLabelsTextColor="#000000"
          sliceLabelsSkipAngle={0}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: 'color' }}
          layers={[
            'slices',
            'radialLabels',
            'legends',
            'sliceLabels',
            CenteredMetric,
          ]}
        />
      </div>
    </>
  );
};

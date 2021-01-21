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
      color: 'hsl(0,100%,50%)',
      rank: 1,
    },
    {
      factionId: 'F003', // BÜNDNIS90/DIE GRÜNEN
      color: 'hsl(105,70%,50%)',
      rank: 2,
    },
    {
      factionId: 'F000', // CDU/CSU
      color: 'hsl(0,0%,0%)',

      rank: 3,
    },
    {
      factionId: 'F005', // FDP
      color: 'hsl(52,100%,50%)',
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
    const defaultRank = -1;

    return {
      faction: node.name,
      rang: node.rank,
      rank: colorObj ? colorObj.rank : defaultRank,
      color: colorObj ? colorObj.color : defaultColor,
    };
  });

  data.sort((a, b) => {
    return b.rank - a.rank;
  });

  const factionRankList: FactionRanked[] = [...factionRanks];
  factionRankList.sort((a, b) => a.rank - b.rank);

  const smallestFactionRank = factionRankList.length
    ? factionRankList[0]
    : undefined;
  const biggestFactionRank = factionRankList.length
    ? factionRankList[factionRankList.length - 1]
    : undefined;

  return (
    <>
      <h2>Redeanteil der Parteien</h2>
      <p className="text-larger">
        {`Bevor wir uns zu den den Stimmungsanalysen begeben, sollten wir 
        zumindest noch einen Einblick in den Redeanteil der Parteien erhalten. 
        Der Redeanteil dient zur Beurteilung der Verhältnismäßigkeit von Stimmungen 
        in Bezug auf den gesamten Bundestag.`}
      </p>
      <p className="text-larger">
        {`Die folgende Grafik gibt den Redeanteil von Parteien innerhalb der
          Legislaturperiode wieder. Der Redeanteil wird auf der Basis des
          Pagerank Algorithmus berechnet. Der Wert kann zwischen 0 bis 1 liegen.
          Je höher der Wert, desto höher ist der Redeanteil der Partei. Die Partei
          ${biggestFactionRank ? biggestFactionRank.name : ''} hat mit 
          ${
            biggestFactionRank ? biggestFactionRank.rank.toFixed(2) : ''
          } den größten Redeanteil. 
          Währenddessen hat die Partei ${
            smallestFactionRank ? smallestFactionRank.name : ''
          }
          mit ${
            smallestFactionRank ? smallestFactionRank.rank.toFixed(2) : ''
          } den kleinsten Redeanteil.`}
      </p>
      <div style={{ height: 600 }}>
        <ResponsiveBar
          data={data}
          keys={['rang']}
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
    </>
  );
};

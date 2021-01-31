import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Faction, PersonRanked } from '../../types';

export interface PersonRankBarPlotProps {
  personRanks: PersonRanked[];
  faction: Faction | undefined;
}

const PersonRankBarPlot: React.FC<PersonRankBarPlotProps> = ({ personRanks, faction }) => {
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

  const data = personRanks
    .filter((personRank) => faction !== undefined && personRank.factionId === faction?.factionId)
    .map((node, index) => {
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
    // @ts-ignore
    return b.rank - a.rank;
  });
  const LIMIT = 10;
  const data2 = data.slice(0, LIMIT);

  return (
    <>
      <div style={{ height: 620 }}>
        <ResponsiveBar
          theme={{
            fontSize: 18,
          }}
          data={data2}
          keys={['rang']}
          label={(d) => Number(d.value).toFixed(2)}
          indexBy="faction"
          margin={{ top: 20, right: 20, bottom: 180, left: 80 }}
          padding={0.3}
          tooltip={(d) => (
            <strong>
              Einfluss: {d.value} <br />
            </strong>
          )}
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
            tickSize: 10,
            tickRotation: -30,
            tickPadding: 10,
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
          labelTextColor="#000000"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </>
  );
};

export default PersonRankBarPlot;

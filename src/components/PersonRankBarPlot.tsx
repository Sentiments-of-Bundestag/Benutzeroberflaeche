import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { PersonRanked } from '../types';

export interface PersonRankBarPlotProps {
  personRanks: PersonRanked[];
}

export const PersonRankBarPlot: React.FC<PersonRankBarPlotProps> = ({
  personRanks,
}) => {
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

  const data = personRanks.map((node) => {
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

  const personRankList: PersonRanked[] = [...personRanks];
  personRankList.sort((a, b) => a.rank - b.rank);

  return (
    <>
      <h3>Wer redet am meisten?</h3>
      <p className="text-larger">PLATZHALTER</p>
      <div style={{ height: 620 }}>
        <ResponsiveBar
          theme={{
            fontSize: 18,
          }}
          data={data}
          keys={['rang']}
          label={(d) => Number(d.value).toFixed(2)}
          indexBy="faction"
          margin={{ top: 10, right: 130, bottom: 140, left: 60 }}
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
          axisBottom={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          enableLabel={true}
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

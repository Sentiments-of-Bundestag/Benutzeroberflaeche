import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { FactionProportion } from '../types';

export interface FactionProportionBarPlotProps {
  factionProportion: FactionProportion[];
}

export const FactionPropotionBarPlot: React.FC<FactionProportionBarPlotProps> = ({
  factionProportion,
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

  const data = factionProportion.map((node) => {
    const colorObj = colors.find((color) => color.factionId === node.factionId);
    const defaultColor = 'hsl(0, 0, 0)';
    const defaultRank = -1;

    return {
      faction: node.name,
      rang: node.proportion,
      rank: colorObj ? colorObj.rank : defaultRank,
      color: colorObj ? colorObj.color : defaultColor,
    };
  });

  data.sort((a, b) => {
    return b.rank - a.rank;
  });

  const factionRankList: FactionProportion[] = [...factionProportion];
  factionRankList.sort((a, b) => a.proportion - b.proportion);

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
        Bevor wir uns zu den den Stimmungsanalysen begeben, sollten wir
        zumindest noch einen Einblick in den Redeanteil der Parteien erhalten.
        Der Redeanteil dient zur Beurteilung der Verhältnismäßigkeit von
        Stimmungen in Bezug auf den gesamten Bundestag.
      </p>
      <p className="text-larger">
        Die folgende Grafik gibt den Redeanteil von Parteien innerhalb der
        Legislaturperiode wieder. Der Redeanteil wird auf der Basis des Pagerank
        Algorithmus berechnet. Der Wert kann <b>zwischen 0 bis 1</b> liegen. Je
        höher der Wert, desto höher ist der Redeanteil der Partei. Die Partei{' '}
        <b>{biggestFactionRank ? biggestFactionRank.name : ''}</b> hat mit{' '}
        <b>
          {biggestFactionRank ? biggestFactionRank.proportion.toFixed(2) : ''}
        </b>{' '}
        den größten Redeanteil. Währenddessen hat die Partei{' '}
        <b>{smallestFactionRank ? smallestFactionRank.name : ''}</b> mit{' '}
        <b>
          {smallestFactionRank ? smallestFactionRank.proportion.toFixed(2) : ''}
        </b>{' '}
        den kleinsten Redeanteil.
      </p>
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

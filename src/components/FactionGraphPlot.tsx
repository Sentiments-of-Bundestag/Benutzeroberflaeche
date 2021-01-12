import React from 'react';
import { ResponsiveNetwork } from '@nivo/network';
import { Faction, FactionGraph } from '../types';

export interface FactionGraphProps {
  factions: Faction[];
  factionsGraph: FactionGraph[];
}

export const FactionGraphPlot: React.FC<FactionGraphProps> = ({ factions }) => {
  console.log(factions);

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

  const graph = [
    {
      count: 1201,
      recipient: 'F005',
      sender: 'F001',
      sentiment: 0,
    },
    {
      count: 727,
      recipient: 'F002',
      sender: 'F001',
      sentiment: 261.5429317362141,
    },
    {
      count: 1921,
      recipient: 'F003',
      sender: 'F001',
      sentiment: 649.0205519427465,
    },
    {
      count: 2785,
      recipient: 'F004',
      sender: 'F001',
      sentiment: 116.52057444001261,
    },
    {
      count: 24164,
      recipient: 'F000',
      sender: 'F001',
      sentiment: 0,
    },
    {
      count: 8685,
      recipient: 'F001',
      sender: 'F005',
      sentiment: 0,
    },
    {
      count: 1949,
      recipient: 'F002',
      sender: 'F005',
      sentiment: 447.18040333042154,
    },
    {
      count: 4165,
      recipient: 'F003',
      sender: 'F005',
      sentiment: 1225.8748076968768,
    },
    {
      count: 2861,
      recipient: 'F004',
      sender: 'F005',
      sentiment: 0,
    },
    {
      count: 15892,
      recipient: 'F000',
      sender: 'F005',
      sentiment: 0,
    },
    {
      count: 7584,
      recipient: 'F001',
      sender: 'F002',
      sentiment: 2585.3257693027167,
    },
    {
      count: 3104,
      recipient: 'F005',
      sender: 'F002',
      sentiment: 725.4477429995895,
    },
    {
      count: 5539,
      recipient: 'F003',
      sender: 'F002',
      sentiment: 2153.5418584226572,
    },
    {
      count: 4419,
      recipient: 'F004',
      sender: 'F002',
      sentiment: 270.55362216512214,
    },
    {
      count: 10366,
      recipient: 'F000',
      sender: 'F002',
      sentiment: 0,
    },
    {
      count: 8991,
      recipient: 'F001',
      sender: 'F003',
      sentiment: 3099.880397891304,
    },
    {
      count: 3559,
      recipient: 'F005',
      sender: 'F003',
      sentiment: 1037.1231933516342,
    },
    {
      count: 3924,
      recipient: 'F002',
      sender: 'F003',
      sentiment: 1588.6556467246264,
    },
    {
      count: 5070,
      recipient: 'F004',
      sender: 'F003',
      sentiment: 281.92451607519746,
    },
    {
      count: 14822,
      recipient: 'F000',
      sender: 'F003',
      sentiment: 3322.6915754620745,
    },
    {
      count: 7535,
      recipient: 'F001',
      sender: 'F004',
      sentiment: 301.53394289603295,
    },
    {
      count: 1404,
      recipient: 'F005',
      sender: 'F004',
      sentiment: 294.66725131327047,
    },
    {
      count: 1171,
      recipient: 'F002',
      sender: 'F004',
      sentiment: 105.46405233340556,
    },
    {
      count: 2394,
      recipient: 'F003',
      sender: 'F004',
      sentiment: 78.02004882189794,
    },
    {
      count: 11453,
      recipient: 'F000',
      sender: 'F004',
      sentiment: 1395.5437359781715,
    },
    {
      count: 122,
      recipient: 'F001',
      sender: 'F000',
      sentiment: 0,
    },
    {
      count: 9,
      recipient: 'F005',
      sender: 'F000',
      sentiment: 0,
    },
    {
      count: 10,
      recipient: 'F002',
      sender: 'F000',
      sentiment: 0,
    },
    {
      count: 18,
      recipient: 'F003',
      sender: 'F000',
      sentiment: 3.9190748669207096,
    },
    {
      count: 38,
      recipient: 'F004',
      sender: 'F000',
      sentiment: 0,
    },
  ];
  const nodes = factions.map((faction) => {
    const colorObj = colors.find(
      (color) => color.factionId === faction.factionId,
    );
    const defaultColor = 'hsl(0, 0, 0)';

    return {
      id: faction.factionId,
      radius: 50,
      depth: 1,
      color: colorObj ? colorObj.color : defaultColor,
    };
  });

  const links = graph
    .map((g) => {
      return {
        source: g.sender,
        target: g.recipient,
        distance: 100,
      };
    })
    .filter((n) => n.source === 'F001');

  return (
    <div style={{ height: 600 }}>
      <ResponsiveNetwork
        nodes={nodes}
        links={links}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={7500}
        iterations={3}
        nodeColor={(n) => {
          return n.color;
        }}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        linkThickness={(t) => 2 * (2 - t.source.depth)}
        motionStiffness={160}
        motionDamping={12}
      />
    </div>
  );
};

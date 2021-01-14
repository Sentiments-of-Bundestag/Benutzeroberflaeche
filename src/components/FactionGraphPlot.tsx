import React from 'react';
import { ResponsiveNetwork } from '@nivo/network';
import { Faction, FactionGraph } from '../types';

export interface FactionGraphProps {
  faction: Faction;
  factions: Faction[];
  factionsGraph: FactionGraph[];
}

export const FactionGraphPlot: React.FC<FactionGraphProps> = ({ faction, factions, factionsGraph }) => {

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

  const nodes = factions.map((f) => {
    const colorObj = colors.find(
      (color) => color.factionId === f.factionId,
    );
    const defaultColor = 'hsl(0, 0, 0)';

    return {
      id: f.factionId,
      radius: 50,
      depth: 1,
      color: colorObj ? colorObj.color : defaultColor,
    };
  });

  const links = factionsGraph
    .filter(node => node.sender === faction.factionId)
    .map(node => {
      return {
        source: node.sender,
        target: node.recipient,
        distance: 100,
      };
    });

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

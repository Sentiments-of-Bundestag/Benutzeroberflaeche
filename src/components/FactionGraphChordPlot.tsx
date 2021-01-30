import React from 'react';
import { ResponsiveChord } from '@nivo/chord';
import { Faction, FactionGraph } from '../types';

export interface FactionGraphCordPlotProps {
  factions: Faction[];
  factionsGraph: FactionGraph[];
}

export const FactionGraphCordPlot: React.FC<FactionGraphCordPlotProps> = ({
  factions,
  factionsGraph,
}) => {
  const matrix: number[][] = factions.map((f1) => {
    return factions.map((f2) => {
      const node = factionsGraph.find(
        (fg) => fg.sender === f1.factionId && f2.factionId === fg.recipient,
      );
      return node ? node.sentiment : 0;
    });
  });

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

  const factionColor = factions.map((faction) => {
    const colorObj = colors.find(
      (color) => color.factionId === faction.factionId,
    );
    const defaultColor = 'hsl(0, 0, 0)';
    return colorObj ? colorObj.color : defaultColor;
  });

  return (
    <div style={{ height: 600 }}>
      <ResponsiveChord
        matrix={matrix}
        keys={factions.map((f) => f.name)}
        margin={{ top: 20, right: 20, bottom: 80, left: 80 }}
        valueFormat=".2f"
        padAngle={0.08}
        innerRadiusRatio={0.9}
        innerRadiusOffset={0.05}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        // @ts-ignore
        ribbonBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
        colors={factionColor}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
      />
    </div>
  );
};

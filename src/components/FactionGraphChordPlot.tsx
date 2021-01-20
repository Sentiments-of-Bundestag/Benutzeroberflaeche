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
  console.log(matrix);

  return (
    <div style={{ height: 600, color: 'white' }}>
      <ResponsiveChord
        matrix={matrix}
        keys={factions.map((f) => f.name)}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
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
        colors={{ scheme: 'nivo' }}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 70,
            itemWidth: 80,
            itemHeight: 14,
            itemsSpacing: 0,
            itemTextColor: '#999',
            itemDirection: 'top-to-bottom',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Faction, FactionGraph } from '../types';
import { SentimentCards } from './SentimentCards';

export interface FactionGraphBarPlotProps {
  factions: Faction[];
  factionsGraph: FactionGraph[];
  faction: Faction;
}

export const FactionGraphBarPlot: React.FC<FactionGraphBarPlotProps> = ({
  factions,
  faction,
  factionsGraph,
}) => {
  const dataTo = factionsGraph
    .filter((node) => node.sender === faction.factionId)
    .map((node) => {
      const recipientFaction = factions.find(
        (f) => f.factionId === node.recipient,
      );

      let color = 'rgb(0,0,0)';
      if (node.sentiment > 0) {
        color = 'rgb(23,239,95)';
      }
      if (node.sentiment < 0) {
        color = 'rgb(196,16,16)';
      }
      return {
        recipient: recipientFaction ? recipientFaction.name : node.recipient,
        sentiment: node.sentiment,
        color,
      };
    });

  const dataFrom = factionsGraph
    .filter((node) => node.recipient === faction.factionId)
    .map((node) => {
      const senderFaction = factions.find((f) => f.factionId === node.sender);

      let color = 'rgb(0,0,0)';
      if (node.sentiment > 0) {
        color = 'rgb(23,239,95)';
      }
      if (node.sentiment < 0) {
        color = 'rgb(196,16,16)';
      }
      return {
        sender: senderFaction ? senderFaction.name : node.sender,
        sentiment: node.sentiment,
        color,
      };
    });
  return (
    <>
      <h1>Sentiment von {faction.name} zu anderen Parteien</h1>

      <div style={{ height: 600 }}>
        <ResponsiveBar
          data={dataTo}
          keys={['sentiment']}
          indexBy="recipient"
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
      <h1>Sentiment von anderen Parteien zu {faction.name}</h1>
      <div style={{ height: 600 }}>
        <ResponsiveBar
          data={dataFrom}
          keys={['sentiment']}
          indexBy="sender"
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

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Person, PersonGraph } from '../types';

export interface PersonGraphBarPlotProps {
  persons: Person[];
  personsGraph: PersonGraph[];
  person: Person;
}

export const PersonGraphBarPlot: React.FC<PersonGraphBarPlotProps> = ({
  persons,
  person,
  personsGraph,
}) => {
  const dataTo = personsGraph
    .filter((node) => node.sender === person.speakerId)
    .map((node) => {
      const recipientFaction = persons.find(
        (f) => f.speakerId === node.recipient,
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

  const dataFrom = personsGraph
    .filter((node) => node.recipient === person.speakerId)
    .map((node) => {
      const senderFaction = persons.find((f) => f.speakerId === node.sender);

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
      <h3>Sentiment von {person.name} zu anderen Parteien</h3>
      <p className="text-larger">PLATZHALTER</p>
      <div style={{ height: 400 }}>
        <ResponsiveBar
          theme={{
            fontSize: 18,
          }}
          label={(d) => Number(d.value).toFixed(2)}
          labelTextColor="#000000"
          minValue={-1}
          maxValue={1}
          data={dataTo}
          keys={['sentiment']}
          indexBy="recipient"
          margin={{ top: 10, right: 130, bottom: 100, left: 60 }}
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
            tickRotation: -15,
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
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <h3>Sentiment von anderen Parteien zu {person.name}</h3>
      <p className="text-larger">PLATZHALTER</p>
      <div style={{ height: 400 }}>
        <ResponsiveBar
          theme={{
            fontSize: 18,
          }}
          label={(d) => Number(d.value).toFixed(2)}
          minValue={-1}
          maxValue={1}
          data={dataFrom}
          keys={['sentiment']}
          indexBy="sender"
          margin={{ top: 10, right: 130, bottom: 100, left: 60 }}
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
            tickRotation: -15,
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

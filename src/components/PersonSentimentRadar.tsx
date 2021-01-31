import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { Faction, Person, PersonGraph } from '../types';

export interface FractionPieProps {
  personsGraph: PersonGraph[];
  persons: Person[];
  person: Person;
  factions: Faction[];
}

export const PersonSentimentRadar: React.FC<FractionPieProps> = ({
  personsGraph,
  persons,
  person,
  factions,
}) => {
  const data = factions.map((faction) => {
    const personGraphForFaction = personsGraph
      .filter((node) => node.sender === person.speakerId)
      .filter((node) =>
        persons.find((p) => p.speakerId === node.recipient && p.factionId === faction.factionId),
      )
      .map((X) => X.sentiment);
    const average =
      personGraphForFaction.length > 0
        ? personGraphForFaction.reduce((a, b) => a + b, 0) / personGraphForFaction.length
        : 0;

    return {
      factionName: faction.name,
      sentiment: Number(average).toFixed(2),
    };
  });

  return (
    <>
      <div style={{ height: 600 }}>
        <ResponsiveRadar
          data={data}
          theme={{
            fontSize: 18,
          }}
          keys={['sentiment']}
          indexBy="factionName"
          maxValue="auto"
          margin={{ top: 80, right: 20, bottom: 80, left: 80 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: 'color' }}
          gridLevels={5}
          gridShape="circular"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={10}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          dotBorderColor={{ from: 'color' }}
          enableDotLabel={true}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors={{ scheme: 'nivo' }}
          fillOpacity={0.25}
          blendMode="multiply"
          animate={true}
          // @ts-ignore
          motionConfig="wobbly"
          isInteractive={true}
        />
      </div>
    </>
  );
};

import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveBar } from '@nivo/bar';
import { Faction, Person, PersonGraph } from '../types';

export interface FractionPieProps {
  personsGraph: PersonGraph[];
  persons: Person[];
  person: Person;
  factions: Faction[]
}

interface PersonGraphExtend extends PersonGraph {
  faction: string;
}

export const PersonSentimentRadar: React.FC<FractionPieProps> = ({
  personsGraph, persons, person, factions }) => {

  const personGraphExtend =
    personsGraph
      .filter((personGraph) => personGraph.sender === person.speakerId)
      .map((personGraph) => {
        const tempPerson = persons.find(p => p.speakerId === personGraph.recipient);
        const factionName = tempPerson?tempPerson.faction:'';
        return { ...personGraph, faction: factionName };
      });

  const data= factions.map(faction => {

    const personGraphForFaction = personsGraph.filter(node => node.sender === person.speakerId)
      .filter(node => persons.find(p => p.speakerId === node.recipient && p.factionId === faction.factionId))
      .map(X => X.sentiment)
    ;
    const average = personGraphForFaction.reduce((a, b) => a + b, 0) / personGraphForFaction.length;

    return {
      'factionName': faction.name,
      'sentiment': Number(average).toFixed(2),
    };
  });

  return (
    <>
      <div style={{ height: 500 }}>
        <ResponsiveRadar
          data={data}
          theme={{
            fontSize: 18,
          }}
          keys={['sentiment' ]}
          indexBy="factionName"
          maxValue="auto"
          margin={{ top: 20, right: 20, bottom: 80, left: 80 }}
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

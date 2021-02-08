import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Select, Tag, Tooltip } from 'antd';
import { Faction, Person, PersonGraph, PersonRanked } from '../types';
import { PersonSentimentRadar } from './PersonSentimentRadar';

export interface PersonGraphBarPlotProps {
  persons: Person[];
  personsGraph: PersonGraph[];
  person: Person;
  factions: Faction[];
  personsRanked: PersonRanked[];
}

export const PersonGraphBarPlot: React.FC<PersonGraphBarPlotProps> = ({
  persons,
  person,
  personsGraph,
  factions,
  personsRanked,
}) => {
  const { Option } = Select;

  const defaultFactionId = factions[0].factionId;
  const [selectedFactionIdTo, setSelectedFactionIdTo] = React.useState(defaultFactionId);
  const [selectedFactionIdFrom, setSelectedFactionIdFrom] = React.useState(defaultFactionId);

  // @ts-ignore
  function handleSelectionBoxTo(value) {
    setSelectedFactionIdTo(value);
  }
  // @ts-ignore
  function handleSelectionBoxFrom(value) {
    setSelectedFactionIdFrom(value);
  }

  const sumInteractionTo = personsGraph.filter(pG => pG.sender === person.speakerId);
  const sumInteractionFrom = personsGraph.filter(pG => pG.recipient === person.speakerId);

  const dataTo = personsGraph
    .filter((node) => node.sender === person.speakerId)
    .filter((node) =>
      persons.find((p) => p.speakerId === node.recipient && p.factionId === selectedFactionIdTo),
    )
    .map((node) => {
      const recipientFaction = persons.find((f) => f.speakerId === node.recipient);

      let color = 'rgb(0,0,0)';
      if (node.sentiment > 0) {
        color = 'rgb(23,239,95)';
      }
      if (node.sentiment < 0) {
        color = 'rgb(196,16,16)';
      }
      return {
        recipientId: recipientFaction ? recipientFaction.speakerId : '',
        recipient: recipientFaction ? recipientFaction.name : node.recipient,
        sentiment: node.sentiment,
        color,
      };
    });

  const dataFrom = personsGraph
    .filter((node) => node.recipient === person.speakerId)
    .filter((node) =>
      persons.find((p) => p.speakerId === node.sender && p.factionId === selectedFactionIdFrom),
    )
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

  dataFrom.sort((a, b) => {
    return b.sentiment - a.sentiment;
  });
  dataTo.sort((a, b) => {
    return b.sentiment - a.sentiment;
  });

  const personTo = factions.map((faction) => {
    return {
      id: faction.factionId,
      name: faction.name,
      count: personsGraph
        .filter((personGraph) => personGraph.sender === person.speakerId)
        .filter((personGraph) =>
          persons.find(
            (p) => personGraph.recipient === p.speakerId && p.factionId === faction.factionId,
          ),
        ).length,
    };
  });

  const personFrom = factions.map((faction) => {
    return {
      id: faction.factionId,
      name: faction.name,
      count: personsGraph
        .filter((personGraph) => personGraph.recipient === person.speakerId)
        .filter((personGraph) =>
          persons.find(
            (p) => personGraph.sender === p.speakerId && p.factionId === faction.factionId,
          ),
        ).length,
    };
  });

  const topInfluencer = 200;
  const influencers = [...personsRanked];
  influencers.sort((a, b) => b.rank - a.rank);
  const topInfluencers = influencers.slice(0, topInfluencer);
  const isInfluencer = topInfluencers.find(
    (influencer) => influencer.speakerId === person.speakerId,
  );

  const personSentiment = personsGraph
    .filter((node) => node.sender === person.speakerId)
    .map((node) => node.sentiment)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <h2>
        Wer ist {person.role} {person.name}?
      </h2>
      <p className="text-justify">
        <b>{person.name}</b> ist Mitglied der Partei <b>{person.faction}</b>. Der/die
        Abgeordnete/r hat in dieser Legislaturperiode auf <b>{sumInteractionTo.length}</b> Abgeordneten
        reagiert und <b>{sumInteractionFrom.length}</b> Abgeordnete haben auf{' '}
        <b>{person.name}</b> reagiert. Die Interaktionen haben sich wie folgt
        an die Parteien gerichtet.
      </p>

      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-justify">
              <b>Von {person.name} ausgehende Interaktionen:</b>
              <ul>
                {personTo.map((node) => (
                  <li key={node.id}>
                    an <b>{node.name},</b> mit <b>{node.count}</b> Abgeordneten
                  </li>
                ))}
              </ul>
            </p>          
          </div>
          <div className="col">
            <p className="text-justify">
              <b>An {person.name} gerichtete Interaktionen:</b>
              <ul>
                {personFrom.map((node) => (
                  <li key={node.id}>
                    von <b>{node.name},</b> mit <b>{node.count}</b> Abgeordneten
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>

      <p className="text-justify">
        <b>Tags: </b>

        {personSentiment < 0 ? (
          <Tooltip title="Dem Abgeordnete/r sind in der Regel negative Interaktionen zuzuordnen">
            <Tag color="red">Widersacher </Tag>
          </Tooltip>
        ) : null}

        {personSentiment === 0 ? (
          <Tooltip title="Dem Abgeordnete/r sind in der Regel neutrale Interaktionen zuzuordnen">
            <Tag>Neutralist</Tag>
          </Tooltip>
        ) : null}

        {personSentiment > 0 ? (
          <Tooltip title="Dem Abgeordnete/r sind in der Regel positive Interaktionen zuzuordnen">
            <Tag color="green">Befürworter</Tag>
          </Tooltip>
        ) : null}

        {isInfluencer && (
          <Tooltip title="Die/Der Abgeordnete/r gehört unter den Top Influence">
            <Tag color="gold">Influencer</Tag>
          </Tooltip>
        )}
      </p>

      <h2>
        Sentiment Analyse für Abgeordneten
      </h2>

      <p className="text-justify">
        Die Methode der Sentiment Analyse, direkt übersetzt zu Stimmungserkennung, beschreibt die automatische Analyse
        von Texten um in einer Aussage eine positive oder negative Stimmung zu erkennen. Diese
        Zuordnung von Positiv und Negativ basiert auf vorher markierten Signalwörtern. Worte wie
        “kompetent” oder “freundlich” werden zum Beispiel mit positiven Meinungen assoziiert. Positiven
        Wörtern wird ein Wert zwischen 0 und 1 zugeordnet und negativen Wörtern ein Wert von 0 bis -1.
        Die Werte werden summiert um ganze Sätze oder Paragraphen zu bewerten. Durch dieses Verfahren
        wurden die Aussagen der Abgeordneten untersucht und somit die Stimmung der Parteien und der
        Personen untereinander ermittelt.
      </p>

      <p className="text-justify">
        Die Ergebnisse wurden zunächst als Durchschnittswerte gegenüber den Parteien
        abgebildet.
      </p>
      <PersonSentimentRadar
        personsGraph={personsGraph}
        persons={persons}
        factions={factions}
        person={person}
      />

      <h2>Sentiment der Interaktionen von und an {person.name}</h2>
      <p className="text-justify">
        Die Stimmung der Aussagen von <b>{person.name}</b> gegenüber Abgeordneten der Partei{' '}
        <Select
          defaultValue={defaultFactionId}
          style={{ width: 120 }}
          onChange={handleSelectionBoxTo}
        >
          {factions.map((faction) => (
            <Option value={faction.factionId} key={faction.factionId}>
              {faction.name}
            </Option>
          ))}
        </Select>.
      </p>
      <div style={{ height: 400 }}>
        <ResponsiveBar
          theme={{
            fontSize: 18,
          }}
          label={(d) => Number(d.value).toFixed(2)}
          labelTextColor="#000000"
          minValue={-1}
          tooltip={(d) => (
            <strong>
              Sentiment: {d.value} <br />
            </strong>
          )}
          maxValue={1}
          data={dataTo}
          keys={['sentiment']}
          indexBy="recipient"
          margin={{ top: 20, right: 20, bottom: 180, left: 80 }}
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
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <p className="text-justify">
        Die Stimmung der Aussagen von Abgeordneten der Partei {' '}
        <Select
          defaultValue={defaultFactionId}
          style={{ width: 120 }}
          onChange={handleSelectionBoxFrom}
        >
          {factions.map((faction) => (
            <Option value={faction.factionId} key={faction.factionId}>
              {faction.name}
            </Option>
          ))}
        </Select> gegenüber <b>{person.name}</b>.
      </p>
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
          margin={{ top: 20, right: 20, bottom: 180, left: 80 }}
          padding={0.3}
          tooltip={(d) => (
            <strong>
              Sentiment: {d.value} <br />
            </strong>
          )}
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

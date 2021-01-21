/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFactionGraphsStart,
  getFactionRanksStart,
  getFactionsStart,
} from '../slices/factions';
import { getSessionsStart } from '../slices/sessions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';
import { FactionNavigation } from '../components/FactionNavigation';
import { getAllSessions } from '../selectors/sessions';
import { SessionSelection } from '../components/SessionSelection';
import { FactionPie } from '../components/FactionPie';
import { Faction } from '../types';
import { FactionGraphBarPlot } from '../components/FactionGraphBarPlot';
import { FactionGraphSwarmPlot } from '../components/FactionGraphSwarmPlot';
import { PersonTable } from '../components/PersonTable';
import { getAllPersons } from '../selectors/persons';
import {
  getPersonGraphsStart,
  getPersonMessagesStart,
  getPersonRanksStart,
} from '../slices/persons';
import { FactionGraphPlot } from '../components/FactionGraphPlot';
import { FactionRankBarPlot } from '../components/FactionRankBarPlot';
import { SentimentCards } from '../components/SentimentCards';
import { FactionGraphCordPlot } from '../components/FactionGraphChordPlot';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factions, factionGraphs, factionRanks } = useSelector(getAllFactions);
  const { personRanks } = useSelector(getAllPersons);
  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
    dispatch(getPersonGraphsStart());
    dispatch(getPersonMessagesStart());
    dispatch(getPersonRanksStart());
  }, [dispatch]);

  const [selectedFaction, setSelectedFaction] = React.useState<
    Faction | undefined
  >(undefined);

  return (
    <>
      <Layout>
        <SessionSelection sessions={sessions} />
        <FactionPie factions={factions} />
        <FactionRankBarPlot factionRanks={factionRanks} />
        <h2>Sentiment Analyse</h2>
        <p className="text-justify">
          Das Wort Sentiment stammt aus dem Französischen und bedeutet einfach
          Gefühl oder Empfindung. Bei der Sentiment-Analyse wird demnach
          untersucht, welche Empfindungen gegenüber einer bestimmten Sache
          vorherrschen. Wem der Begriff Sentiment-Analyse nicht liegt, der kann
          Tonalitätsanalyse verwenden. Ganz im Sinne von „Der Ton macht die
          Musik“.
        </p>
        <p className="text-justify">
          Diese Sentiment-Analyse ermittelt die Stimmung im Bundestag. Hier
          werden die Protokolle auf Basis von vorher festgelegten positiven und
          negativen Signal-Worten bewertet. Die Worte „freundlich“ und
          „kompetent“ werden als positive Signale bewertet und das Wort „ätzend“
          als negatives. Insgesamt würde der Satz als positiv von der Software
          eingeordnet werden, da zwei positive nur einem negativen Signal-Wort
          gegenüberstehen.
        </p>
        <FactionNavigation
          factions={factions}
          selectFaction={setSelectedFaction}
        />
        {selectedFaction !== undefined && factionGraphs.length > 0 ? (
          <>
            <FactionGraphBarPlot
              faction={selectedFaction}
              factions={factions}
              factionsGraph={factionGraphs}
            />
            <FactionGraphPlot
              faction={selectedFaction}
              factions={factions}
              factionsGraph={factionGraphs}
            />
            <FactionGraphSwarmPlot
              faction={selectedFaction}
              factions={factions}
              factionsGraph={factionGraphs}
            />
          </>
        ) : null}
        <FactionGraphCordPlot
          factions={factions}
          factionsGraph={factionGraphs}
        />
        <PersonTable persons={personRanks} />
      </Layout>
    </>
  );
};

export default FactionsPage;

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFactionGraphsStart,
  getFactionProportionsStart,
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
import { PersonTable } from '../components/PersonTable';
import { getAllPersons } from '../selectors/persons';
import {
  getPersonGraphsStart,
  getPersonMessagesStart,
  getPersonRanksStart,
} from '../slices/persons';
import { FactionRankBarPlot } from '../components/FactionRankBarPlot';
import { FactionGraphCordPlot } from '../components/FactionGraphChordPlot';
import { PersonRankBarPlot } from '../components/PersonRankBarPlot';
import { FactionPropotionBarPlot } from '../components/FactionPropotionBarPlot';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    factions,
    factionGraphs,
    factionRanks,
    factionProportion,
  } = useSelector(getAllFactions);
  const { personRanks, personGraphs, persons } = useSelector(getAllPersons);
  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
    dispatch(getPersonGraphsStart());
    dispatch(getPersonMessagesStart());
    dispatch(getPersonRanksStart());
    dispatch(getFactionProportionsStart());
  }, [dispatch]);

  useEffect(() => {
    if (factions.length > 0) {
      setSelectedFaction(factions[0]);
    }
  }, [factions]);

  const [selectedFaction, setSelectedFaction] = React.useState<
  Faction | undefined
  >(factions[0]);

  return (
    <>
      <Layout>
        <SessionSelection sessions={sessions} />
        <FactionPie factions={factions} />
        <FactionRankBarPlot factionRanks={factionRanks} />
        <FactionPropotionBarPlot factionProportion={factionProportion} />
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
        {factionGraphs.length > 0 && factions.length > 0 ? (
          <FactionGraphCordPlot
            factions={factions}
            factionsGraph={factionGraphs}
          />
        ) : null}
        <p className="text-justify">
          Dank der Sentiment-Analyse erfahren wir nun, wie Stimmungen der
          Parteien zueinander sind. Wählen Sie dazu eine Partei aus, um die
          Stimmung der ausgewählten Partei zu den anderen Parteien genauer zu
          betrachten.
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
          </>
        ) : null}

        <h2>Personen</h2>
        <PersonRankBarPlot personRanks={personRanks} />
        <PersonTable
          personsGraph={personGraphs}
          personsRanked={personRanks}
          persons={personRanks}
        />
      </Layout>
    </>
  );
};

export default FactionsPage;

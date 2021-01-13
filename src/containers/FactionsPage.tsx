/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFactionGraphsStart, getFactionRanksStart, getFactionsStart } from '../slices/factions';
import { getSessionsStart } from '../slices/sessions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';
import { FactionNavigation } from '../components/FactionNavigation';
import { getAllSessions } from '../selectors/sessions';
import { SessionSelection } from '../components/SessionSelection';
import { FactionPie } from '../components/FactionPie';
import { Faction, Person } from '../types';
import { FactionGraphBarPlot } from '../components/FactionGraphBarPlot';
import { FactionGraphSwarmPlot } from '../components/FactionGraphSwarmPlot';
import { PersonTable } from '../components/PersonTable';
import { getAllPersons } from '../selectors/persons';
import { getPersonGraphsStart, getPersonMessagesStart, getPersonRanksStart, getPersonsStart } from '../slices/persons';
import { FactionGraphPlot } from '../components/FactionGraphPlot';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factions, factionGraphs, factionRanks } = useSelector(getAllFactions);
  const { persons } = useSelector(getAllPersons);
  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
    dispatch(getPersonsStart());
    dispatch(getPersonGraphsStart());
    dispatch(getPersonMessagesStart());
    dispatch(getPersonRanksStart());
  }, [dispatch]);

  const [selectedFaction, setSelectedFaction] = React.useState<Faction | undefined>(undefined);

  return (
    <>
      <Layout>
        <SessionSelection sessions={sessions} />
        <FactionPie factions={factions} />

        <FactionNavigation factions={factions} selectFaction={setSelectedFaction} />
        {selectedFaction !== undefined && factionGraphs.length > 0 ? (
          <>
            <FactionGraphBarPlot faction={selectedFaction} factions={factions} factionsGraph={factionGraphs} />
            <FactionGraphPlot faction={selectedFaction} factions={factions} factionsGraph={factionGraphs} />
            <FactionGraphSwarmPlot faction={selectedFaction} factions={factions} factionsGraph={factionGraphs} />
            <PersonTable persons={persons.filter(person => person.factionId === selectedFaction?.factionId)} />
          </>
        ) : null}
      </Layout>
    </>
  );
};

export default FactionsPage;

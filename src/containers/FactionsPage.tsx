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
import { FactionGraphPlot } from '../components/FactionGraphPlot';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factions, factionGraphs, factionRanks } = useSelector(getAllFactions);
  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
    dispatch(getSessionsStart());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <SessionSelection sessions={sessions} />
        <FactionPie factions={factions} />

        <FactionNavigation />
        {factions.length > 0 ? (
          <FactionGraphPlot factions={factions} factionsGraph={factionGraphs} />
        ) : null}
      </Layout>
    </>
  );
};

export default FactionsPage;

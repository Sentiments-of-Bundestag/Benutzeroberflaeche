/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFactionGraphsStart, getFactionRanksStart, getFactionsStart } from '../slices/factions';
import { getSessionsStart } from '../slices/sessions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';
import { FactionNavigation } from '../components/FactionNavigation';
import { getAllSessions } from '../selectors/sessions';
import { LegislativePeriodSelection } from '../components/LegislativePeriodSelection';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factions, factionGraphs, factionRanks } = useSelector(getAllFactions);
  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
  }, [dispatch]);
  const legislativePeriods =
    Array.from(new Set(sessions.map(session => session.legislativePeriod)));
  return (
    <>
      <Layout>
        <LegislativePeriodSelection legislativePeriods={legislativePeriods} />
        <FactionNavigation />
        <br />
        {sessions.length}

        <br />
        {`Faction count: ${factions.length}`}
        <br />
        {`Faction graphs count: ${factionGraphs.length}`}
        {factionGraphs}
        <br />
        {`Faction ranks count: ${factionRanks.length}`}
      </Layout>
    </>
  );
};

export default FactionsPage;

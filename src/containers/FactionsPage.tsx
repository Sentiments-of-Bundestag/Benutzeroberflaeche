/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFactionsStart,
  getFactionGraphsStart,
  getFactionRanksStart,
} from '../slices/factions';
import { getSessionsStart } from '../slices/sessions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factions, factionGraphs, factionRanks } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <br />
        {`Faction count: ${factions.length}`}
        <br />
        {`Faction graphs count: ${factionGraphs.length}`}
        <br />
        {`Faction ranks count: ${factionRanks.length}`}
      </Layout>
    </>
  );
};

export default FactionsPage;

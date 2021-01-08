/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFactionsStart,
  getFactionGraphsStart,
  getFactionRanksStart,
} from '../slices/factions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factionGraphs } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <br />
      </Layout>
    </>
  );
};

export default FactionsPage;

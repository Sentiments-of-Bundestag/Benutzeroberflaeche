/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { getFactionsStart, getFactionGraphsStart } from '../slices/factions';
import { getAllFactions } from '../selectors/factions';
import { HeatMap } from '../components/HeatMap';
import { FactionNavigation } from '../components/FactionNavigation';
import { Layout } from '../components/Layout';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { factionGraphs } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <br />
        <h2 style={{ textAlign: 'center' }}>
          Wählen eine Partei{' '}
          <Badge pill variant="light">
            Example
          </Badge>
        </h2>
        <br />
        <FactionNavigation />
        <br />
        <hr />
      </Layout>
    </>
  );
};

export default FactionsPage;

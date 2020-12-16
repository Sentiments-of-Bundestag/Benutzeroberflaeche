/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

import { Badge } from 'react-bootstrap';
import { Layout } from '../components/Layout';
import { ColumnNegativesChart } from '../components/ColumnNegativesChart';

interface RouteParams {
  id: string;
}

const FactionDetailPage: React.FC = () => {
  const { id } = useParams<RouteParams>();

  return (
    <>
      <Layout>
        <br />
        <h2 style={{ textAlign: 'center' }}>
          Verhalten der Partei gegenüber anderen Parteien{' '}
          <Badge variant="secondary">Example</Badge>
        </h2>
        <br />
        <ColumnNegativesChart factionGraphs={[]} />
      </Layout>
    </>
  );
};

export default FactionDetailPage;

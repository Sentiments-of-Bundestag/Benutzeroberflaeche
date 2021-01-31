import React from 'react';
import { Card } from 'react-bootstrap';
import { Skeleton } from 'antd';

export interface KpiCardProps {
  kpi: number;
  description: string;
  loading?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({ kpi, description, loading }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            <h3>{loading ? <Skeleton.Button active /> : kpi}</h3>
          </Card.Title>
          <Card.Text>
            <b>{description}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default KpiCard;

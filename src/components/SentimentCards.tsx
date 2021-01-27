import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export interface SentimentCardsProp {
  sessionLength: number;
  periodLength: number;
}

export const SentimentCards: React.FC<SentimentCardsProp> = ({
  sessionLength,
  periodLength,
}) => {
  return (
    <Row>
      <Col>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              <h3>Sitzungsprotokollen</h3>
              <h1>{sessionLength}</h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              <h3>Legislaturperioden</h3>
              <h1>{periodLength}</h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

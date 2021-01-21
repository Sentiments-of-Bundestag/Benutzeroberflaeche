import React from 'react';
import { CardGroup, Card, Row, Col } from 'react-bootstrap';

export interface SentimentCardsProp {}

export const SentimentCards: React.FC<SentimentCardsProp> = ({}) => {
  return (
    <Row>
      <Col>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              <span role="img" aria-label="positive" style={{ fontSize: 72 }}>
                😃
              </span>
            </Card.Title>
            <Card.Text>Positiver</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              <span role="img" aria-label="neural" style={{ fontSize: 72 }}>
                😐
              </span>
            </Card.Title>
            <Card.Text>0</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              <span role="img" aria-label="negative" style={{ fontSize: 72 }}>
                ☹️
              </span>
            </Card.Title>
            <Card.Text>Negativer Wert</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

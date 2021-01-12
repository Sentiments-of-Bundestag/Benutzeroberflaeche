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
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
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
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
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
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

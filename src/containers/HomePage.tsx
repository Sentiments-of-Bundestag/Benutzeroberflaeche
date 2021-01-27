/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';

import { getAllSessions } from '../selectors/sessions';
import { getSessionsStart } from '../slices/sessions';
import { SentimentCards } from '../components/SentimentCards';

const HomePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const toSentiments = () => {
    history.push('/sentiment');
  };

  const { sessions } = useSelector(getAllSessions);
  useEffect(() => {
    dispatch(getSessionsStart());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <h1>Sozialer Interaktion im Deutschen Bundestag</h1>
        <p className="text-justify">
          Sentiment of Bundestag hat die Plenarprotokolle des deutschen
          Bundestags aufbereitet und analysierbar gemacht. Darüber hinaus hat
          die Plattform die Stimmungen der Parteien und Abgeordneten anhand von
          Sentimentanalysen über mehrere Legislaturperioden genauer betrachtet.
          Erfahre mehr und erstelle hier deine eigenen umfassenden Analysen.
        </p>

        <SentimentCards
          sessionLength={sessions.length}
          periodLength={
            Array.from(new Set(sessions.map((s) => s.legislativePeriod))).length
          }
        />
        <br />
        <Button variant="danger" size="lg" onClick={() => toSentiments()}>
          Zu den Analysen
        </Button>
        <p className="text-justify">
          <br />
          Hierbei handelt es sich um ein Semesterprojekt im Rahmen der
          Lehrveranstaltung Information Systems bei Prof. Dr. Thomas Hoppe an
          der HTW-Berlin.
        </p>
      </Layout>
    </>
  );
};

export default HomePage;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Layout } from '../components/Layout';

const HomePage: React.FC = () => {
  const history = useHistory();
  const toSentiments = () => {
    history.push('/sentiment');
  };
  return (
    <>
      <Layout>
        <h1>Sozialer Interaktion im Deutschen Bundestag</h1>
        <p className="text-justify">
          Der Ton im Bundestag wird rauer. Um dies zu überprüfen, hat das Projekt
          Sentiment of Bundestag die Plenumsprotokolle des Bundestages mit
          künstlicher Intelligenzen untersucht.
        </p>

        <p className="text-justify">
          TBD
        </p>
        <p className="text-justify">
          Hierbei handelt es sich um ein Semesterprojekt im Rahmen der
          Lehrveranstaltung Information Systems bei Prof. Dr. Thomas Hoppe an
          der HTW-Berlin.
        </p>

        <Button variant="danger" size="lg" onClick={() => toSentiments()}>
          Zu den Analysen
        </Button>
      </Layout>
    </>
  );
};

export default HomePage;

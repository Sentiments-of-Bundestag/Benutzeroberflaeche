/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

import { getSessionsStart } from '../slices/sessions';
import { getAllSessions } from '../selectors/sessions';

import AppLayout from '../layout/AppLayout';
import KpiCard from '../components/common/KpiCard';

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { sessions, areSessionsLoading } = useSelector(getAllSessions);
  const periodCount = Array.from(new Set(sessions.map((s) => s.legislativePeriod))).length;

  useEffect(() => {
    dispatch(getSessionsStart());
  }, [dispatch]);

  const redirectTo = (route: string) => {
    history.push(route);
  };

  return (
    <>
      <AppLayout>
        <h1>Analyse der Interaktionen im Deutschen Bundestag</h1>
        <p className="text-justify">
          In dem Projekt, Sentiment of Bundestag, hat eine Gruppe von Studenten der HTW Berlin im
          Wintersemester 2020/21 Plenarprotokolle des Deutschen Bundestags aufbereitet und
          erforscht. Mithilfe einer Sentiment Analyse wurden Kommentare und Wortmeldungen der
          Abgeordneten bezogen auf ihre Stimmung untersucht. Die Ergebnisse wurden nach
          Legislaturperioden sortiert, aufbereitet und visualisiert.
        </p>
        <Row>
          <Col>
            <KpiCard
              kpi={periodCount}
              description="Legislaturperioden"
              loading={areSessionsLoading}
            />
          </Col>
          <Col>
            <KpiCard
              kpi={sessions.length}
              description="Sitzungsprotokolle"
              loading={areSessionsLoading}
            />
          </Col>
        </Row>
        <br />
        <Button variant="primary" size="lg" block onClick={() => redirectTo('factions')}>
          Weiter zu den Analysen der Interaktionen von Parteien
        </Button>
        <Button variant="secondary" size="lg" block onClick={() => redirectTo('persons')}>
          Weiter zu den Analysen der Interaktionen von Abgeordneten
        </Button>
        <p className="text-justify">
          <br />
          Die Projektarbeit wurde im Rahmen des Moduls Information Systems unter der Aufsicht von
          Prof. Dr. rer. nat. Thomas Hoppe durchgeführt.
        </p>
      </AppLayout>
    </>
  );
};

export default Landing;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { Skeleton } from 'antd';

// Reducer Actions
import {
  getFactionGraphsStart,
  getFactionProportionsStart,
  getFactionRanksStart,
  getFactionsStart,
} from '../slices/factions';
import {
  getPersonGraphsStart,
  getPersonMessagesStart,
  getPersonRanksStart,
} from '../slices/persons';
import { getSessionsStart } from '../slices/sessions';

// Selectors
import { getAllFactions } from '../selectors/factions';
import { getAllPersons } from '../selectors/persons';

import AppLayout from '../layout/AppLayout';
import PersonTable from '../components/PersonTable';

interface PersonsProps {}

const Persons: React.FC<PersonsProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { factions } = useSelector(getAllFactions);
  const { personRanks, personGraphs } = useSelector(getAllPersons);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
    dispatch(getFactionRanksStart());
    dispatch(getSessionsStart());
    dispatch(getPersonGraphsStart());
    dispatch(getPersonMessagesStart());
    dispatch(getPersonRanksStart());
    dispatch(getFactionProportionsStart());
  }, [dispatch]);

  const redirectTo = (route: string) => {
    history.push(route);
  };

  return (
    <>
      <AppLayout>
        <h1>Sentiment Analyse für Abgeordnete</h1>
        <Alert variant="warning">
          <b> Wähle einen Abgeordneten aus, indem du auf die Zeile der Tabelle klickst..</b>
        </Alert>

        {factions.length && personRanks.length && personGraphs.length ? (
          <PersonTable
            factions={factions}
            personsGraph={personGraphs}
            personsRanked={personRanks}
            persons={personRanks}
          />
        ) : (
          <Skeleton active />
        )}
        <Button variant="primary" size="lg" block onClick={() => redirectTo('factions')}>
          Weiter zu den Parteien
        </Button>
        <Button variant="secondary" size="lg" block onClick={() => redirectTo('/')}>
          Zurück zur Startseite
        </Button>
      </AppLayout>
    </>
  );
};

export default Persons;

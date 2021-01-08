/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import {
  getPersonsStart,
  getPersonGraphsStart,
  getPersonMessagesStart,
  getPersonRanksStart,
} from '../slices/persons';
import { getSessionsStart } from '../slices/sessions';
import { getAllPersons } from '../selectors/persons';
import { Layout } from '../components/Layout';

const PersonsPage: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { persons, personGraphs, personMessages, personRanks } = useSelector(
    getAllPersons,
  );

  useEffect(() => {
    dispatch(getPersonsStart());
    dispatch(getPersonGraphsStart());
    dispatch(getPersonMessagesStart());
    dispatch(getPersonRanksStart());
    dispatch(getSessionsStart());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <br />
        {`Person count: ${persons.length}`}
        <br />
        {`Person graphs count: ${personGraphs.length}`}
        <br />
        {`Person messages count: ${personMessages.length}`}
        <br />
        {`Person ranks count: ${personRanks.length}`}
      </Layout>
    </>
  );
};

export default PersonsPage;

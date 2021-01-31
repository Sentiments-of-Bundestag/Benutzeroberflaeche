import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { getAllSessions } from '../selectors/sessions';
import { getAllFactions } from '../selectors/factions';

// Layout
import AppLayout from '../layout/AppLayout';

// Components
import { SessionSelection } from '../components/SessionSelection';
import LegislativePeriodSelection from '../components/selections/LegislativePeriodSelection';
import ToolTipWrapper from '../components/ToolTipWrapper';
import FactionPiePlot from '../components/plots/FactionPiePlot';

// Types
import { Session } from '../types';

interface FactionsProps {}

const Factions: React.FC<FactionsProps> = () => {
  const dispatch = useDispatch();
  const { sessions, areSessionsLoading } = useSelector(getAllSessions);
  const {
    factions,
    factionGraphs,
    factionRanks,
    factionProportion,
  } = useSelector(getAllFactions);
  const legislativePeriods = Array.from(
    new Set(sessions.map((s) => s.legislativePeriod)),
  );

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

  const renderLegislativePeriodText = (): React.ReactNode => {
    const firstDate = sessions.length
      ? new Date(Date.parse(sessions[0].startDateTime))
      : undefined;

    const lastDate = sessions.length
      ? new Date(Date.parse(sessions[sessions.length - 1].endDateTime))
      : undefined;

    return (
      <p className="text-justify">
        Die Legislaturperiode{' '}
        <b>{legislativePeriods.length ? legislativePeriods[0] : ''}</b> wurde am{' '}
        <b>
          {firstDate
            ? `${firstDate.getMonth()}/${firstDate.getFullYear()}`
            : ''}
        </b>{' '}
        gewählt und lief bis zum{' '}
        <b>
          {lastDate ? `${lastDate.getMonth()}/${lastDate.getFullYear()}` : ''}
        </b>
        . Zu dieser Periode wurden <b>{sessions.length}</b> Protokolle
        untersucht.
      </p>
    );
  };

  const renderBundestagZusammensetzungText = (): React.ReactNode => {
    return (
      <p className="text-justify">
        Der Bundestages der{' '}
        <b>{legislativePeriods.length ? legislativePeriods[0] : ''}</b> setzte
        sich aus den folgendenn <b>{factions.length}</b> Parteien zusammen:
        <ul>
          {factions.map((faction) => (
            <li key={faction.factionId}>
              <b>{faction.name}</b> mit <b>{faction.size}</b> Stimmen
            </li>
          ))}
        </ul>
        Im folgenden Pie-Chart ist die Sitzverteilung visualisiert.
      </p>
    );
  };

  return (
    <>
      <AppLayout>
        <SessionSelection sessions={sessions} />
        <ToolTipWrapper text="Wähle zuerst eine Legislaturperiode aus, die du genauer betrachten möchtest.">
          <LegislativePeriodSelection
            legislativePeriods={legislativePeriods}
            label="Legislaturperiode"
            loading={areSessionsLoading}
          />
        </ToolTipWrapper>
        {renderLegislativePeriodText()}
        <h2>Zusammensetzung des Bundestages</h2>
        {renderBundestagZusammensetzungText()}
        <FactionPiePlot factions={factions} />
      </AppLayout>
    </>
  );
};

export default Factions;

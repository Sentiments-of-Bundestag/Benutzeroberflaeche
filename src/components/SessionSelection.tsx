import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Session } from '../types';
import { Layout } from './Layout';

export interface LegislativePeriodSelectionProps {
  sessions: Session[];
}

export const SessionSelection: React.FC<LegislativePeriodSelectionProps> = ({
  sessions,
}) => {
  const legislativePeriods = Array.from(
    new Set(sessions.map((s) => s.legislativePeriod)),
  );
  const dropdownItems = legislativePeriods.map((period) => (
    <Dropdown.Item
      key={period.toString()}
      onClick={(event) => {
        // @ts-ignore
        setSelectedPeriod(event.target.text);
      }}
    >
      {period}
    </Dropdown.Item>
  ));

  const [selectedPeriod, setSelectedPeriod] = React.useState<number>(19);

  return (
    <div>
      <h1>
        <Dropdown>
          <Dropdown.Toggle
            className="dropdown-black"
            id="dropdown-basic"
            size="lg"
          >
            {selectedPeriod}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropdownItems}
            <Dropdown.Divider />
            <Dropdown.Item disabled={true} key="-1">
              Mehr in Arbeit
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        Legislaturperiode
      </h1>
      <Card>
        <Card.Body>{`Daten von ${sessions.length} Sitzung`}</Card.Body>
      </Card>
    </div>
  );
};

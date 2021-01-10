import React from 'react';
import { Dropdown } from 'react-bootstrap';

export interface LegislativePeriodSelectionProps {
  legislativePeriods: number[];
}

export const LegislativePeriodSelection: React.FC<LegislativePeriodSelectionProps> = ({ legislativePeriods }) => {

  // eslint-disable-next-line no-unused-vars
  const [selectedPeriod, setSelectedPeriod] = React.useState('19');
  const dropdownItems = legislativePeriods.map(period =>
    <Dropdown.Item key={period.toString()} onClick={() => console.log('dasd')}>{period}</Dropdown.Item>);

  return (
    <div>
      <h1>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg">
            {selectedPeriod}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropdownItems}
            <Dropdown.Divider />
            <Dropdown.Item disabled={true} key="-1">Mehr in Arbeit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        Legislaturperiode
      </h1>
    </div>
  );
};

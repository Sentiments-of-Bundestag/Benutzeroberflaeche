import React from 'react';
import { OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';

import { Session } from '../types';

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

  // @ts-ignore
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Wähle zuerst eine Legislaturperiode aus, die du genauer betrachten
      möchtest.
    </Tooltip>
  );

  const sessionList = [...sessions];
  sessionList.sort((a, b) =>
    (a ? a.startDateTime : '').localeCompare(a ? a.startDateTime : ''),
  );
  const firstDate = sessionList.length
    ? new Date(Date.parse(sessionList[0].startDateTime))
    : undefined;
  const lastDate = sessionList.length
    ? new Date(Date.parse(sessionList[sessionList.length - 1].endDateTime))
    : undefined;

  return (
    <div>
      <h1>
        <OverlayTrigger
          placement="bottom-start"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
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
        </OverlayTrigger>
        Legislaturperiode
      </h1>
      <p className="text-justify">
        {`Die Legislaturperiode ${legislativePeriods} war vom ${
          firstDate || ''
        } 
        bis zum ${lastDate || ''}. Derzeit befinden sich ${
          sessions.length
        } Protokolle zur
        Verfügung. `}
      </p>
    </div>
  );
};

import React from 'react';
import { Col, Figure, Row } from 'react-bootstrap';

import SPD_LOGO from '../assets/spd_logo.png';
import FDP_LOGO from '../assets/fdp_logo.png';
import LINKE_LOGO from '../assets/linke_logo.svg';
import GRUENEN_LOGO from '../assets/gruenen.png';
import AFD_LOGO from '../assets/afd_logo.png';
import CDU_CSU_LOGO from '../assets/cdu_csu_logo.png';

export interface FactionNavigationProps {}

export const FactionNavigation: React.FC<FactionNavigationProps> = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <h1>Sentiment Analyse</h1>
      <p className="text-larger">
        Wähle eine Partei aus, um die Interaktionen der Partei zu den anderen
        Parteien zu sehen
      </p>
      <Row>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image thumbnail alt="DIE LINKE" src={LINKE_LOGO} />
          </Figure>
        </Col>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image thumbnail alt="SPD" src={SPD_LOGO} />
          </Figure>
        </Col>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image
              thumbnail
              alt="BÜNDNIS 90/DIE GRÜNEN"
              src={GRUENEN_LOGO}
            />
          </Figure>
        </Col>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image thumbnail alt="CDU/CSU" src={CDU_CSU_LOGO} />
          </Figure>
        </Col>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image thumbnail alt="FDP" src={FDP_LOGO} />
          </Figure>
        </Col>
        <Col xs={4} md={2}>
          <Figure>
            <Figure.Image thumbnail alt="AFD" src={AFD_LOGO} />
          </Figure>
        </Col>
      </Row>
    </div>
  );
};

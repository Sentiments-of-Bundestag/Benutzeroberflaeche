import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Figure, Row } from 'react-bootstrap';

import SPD_LOGO from '../assets/spd_logo.png';
import FDP_LOGO from '../assets/fdp_logo.jpg';
import LINKE_LOGO from '../assets/linke_logo.svg';
import GRUENEN_LOGO from '../assets/gruenen.png';
import AFD_LOGO from '../assets/afd_logo.svg';
import CDU_CSU_LOGO from '../assets/cdu_csu_logo.png';

export interface FactionNavigationProps {}

export const FactionNavigation: React.FC<FactionNavigationProps> = () => {
  const history = useHistory();
  return (
    <Row>
      <Col xs={6} md={3}>
        <Button
          variant="outline-light"
          onClick={() => history.push('/factions/1')}
        >
          <Figure>
            <Figure.Image width="150" thumbnail alt="SPD" src={SPD_LOGO} />
          </Figure>
        </Button>
      </Col>
      <Col xs={6} md={3}>
        <Button variant="outline-light">
          <Figure>
            <Figure.Image thumbnail alt="FDP" src={FDP_LOGO} />
          </Figure>
        </Button>
      </Col>
      <Col xs={6} md={3}>
        <Button variant="outline-light">
          <Figure>
            <Figure.Image thumbnail alt="DIE LINKE" src={LINKE_LOGO} />
          </Figure>
        </Button>
      </Col>
      <Col xs={6} md={3}>
        <Button variant="outline-light">
          <Figure>
            <Figure.Image
              thumbnail
              alt="BÜNDNIS 90/DIE GRÜNEN"
              src={GRUENEN_LOGO}
            />
          </Figure>
        </Button>
      </Col>
      <Col xs={6} md={3}>
        <Button variant="outline-light">
          <Figure>
            <Figure.Image thumbnail alt="AFD" src={AFD_LOGO} />
          </Figure>
        </Button>
      </Col>
      <Col xs={6} md={3}>
        <Button variant="outline-light">
          <Figure>
            <Figure.Image thumbnail alt="CDU/CSU" src={CDU_CSU_LOGO} />
          </Figure>
        </Button>
      </Col>
    </Row>
  );
};

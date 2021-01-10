import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavigationLinkInterface } from '../types';

export interface HeaderProps {
  links?: NavigationLinkInterface[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const history = useHistory();
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand onClick={() => history.push('/')}>
        Sentiment of Bundestag
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto" />
        <Nav>
          {/*          <Nav.Link>
            Über uns
          </Nav.Link> */}
          <Nav.Link target="_blank" href="https://github.com/orgs/Sentiments-of-Bundestag/dashboard">
            <Button variant="outline-light">Code</Button>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

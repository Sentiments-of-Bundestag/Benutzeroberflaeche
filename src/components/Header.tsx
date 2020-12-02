import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { NavigationLinkInterface } from '../types';

export interface HeaderProps {
  links?: NavigationLinkInterface[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const history = useHistory();
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand onClick={() => history.push('/')}>Navbar</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          {links &&
            links.map((link, index) => (
              <Nav.Link
                key={index.toString()}
                onClick={() => history.push(link.route)}
              >
                {link.name}
              </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

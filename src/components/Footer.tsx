import React from 'react';

import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavigationLinkInterface } from '../types';

export interface FooterProps {
  links?: NavigationLinkInterface[];
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <div>
      <Nav className="justify-content-end">
        <Nav.Link target="_blank" href="https://www.htw-berlin.de/datenschutz/">
          Datenschutzerklärung
        </Nav.Link>
        <Nav.Link target="_blank" href="https://www.htw-berlin.de/impressum/">
          Impressum
        </Nav.Link>
      </Nav>
    </div>
  );
};

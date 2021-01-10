import React from 'react';

import { NavigationLinkInterface } from '../types';

export interface FooterProps {
  links?: NavigationLinkInterface[];
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <div>
      <a href="https://www.htw-berlin.de/impressum/">
        Impressum
      </a>
      <br />
      <a href="https://www.htw-berlin.de/datenschutz/">
        Datenschutzerlärung
      </a>
    </div>
  );
};

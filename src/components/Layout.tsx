import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from './Header';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header links={[{ name: 'Partein', route: '/factions' }]} />
      <Container>{children}</Container>
    </>
  );
};

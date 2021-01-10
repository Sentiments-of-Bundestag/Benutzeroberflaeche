import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

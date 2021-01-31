import React from 'react';
import { Container } from 'react-bootstrap';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content-layout">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;

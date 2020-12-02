import React from 'react';
import { Container } from 'react-bootstrap';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

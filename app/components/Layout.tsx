import React from 'react';
import Header from './Header';
import styled from 'styled-components';


const LayoutWrapper = styled.div`
  height: 100%;
`;

const Layout: React.FC = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;


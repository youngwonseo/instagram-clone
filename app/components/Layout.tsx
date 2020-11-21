import React from 'react';
import Header from './Header';
import styled from 'styled-components';


const LayoutWrapper = styled.div`
  height: 100%;
  
`;

const Contents = styled.div`
  margin-top: 60px;
  padding: 0px 30%;
`;

const Layout: React.FC = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      <Contents>
        {children}
      </Contents>
    </LayoutWrapper>
  );
};

export default Layout;


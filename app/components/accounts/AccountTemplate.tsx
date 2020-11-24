import React from 'react';
import styled from 'styled-components';
import AccountMenu from './AccountMenu';
import AccountMenuItem from './menu/AccountMenuItem';

const AccountTemplateWrapper = styled.div`
  display: flex;
  background-color: white;
`;


interface Props {

}

const AccountTemplate: React.FC<Props> = ({ children }) => {
return (
  <AccountTemplateWrapper>
    {children}
  </AccountTemplateWrapper>
);
};

export default AccountTemplate;
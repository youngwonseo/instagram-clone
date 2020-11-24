import React from 'react';
import styled from 'styled-components';


const AccountItemWrapper = styled.li`
  
`;

interface Props {}

const AccountMenuItem: React.FC<Props> = ({children}) => {
  return <AccountItemWrapper>{children}</AccountItemWrapper>;
}


export default AccountMenuItem;
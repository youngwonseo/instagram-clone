import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { shadow } from '../lib/styles/styleUtils';


import HomeIcon from './common/icons/HomeIcon';
import DirectIcon from './common/icons/DirectIcon';
import ExploreIcon from './common/icons/ExploreIcon';



const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;  
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  
  height: 54px;
  border-bottom: 1px solid #ced4da;
  padding: 0px 30%;
`;



const Logo = styled.img.attrs({
  src: '/logo.png'
})`
  height: 34px;
`;

const SearchPanel = styled.div`
`;

const ButtonGroup = styled.div`

`;



const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <SearchPanel>
        <input type="text"/>
      </SearchPanel>

      <ButtonGroup>
        <Link href="/">
          <HomeIcon/>
        </Link>
        <Link href="/dm">
          <DirectIcon/>
        </Link>
        <Link href="/explore">
          <ExploreIcon/>          
        </Link>

        <Link href="/accounts">account</Link>
      </ButtonGroup>
    </HeaderWrapper>
  );
};

export default Header;
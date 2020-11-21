import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { shadow } from '../lib/styles/styleUtils';


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
  border-bottom: 1px solid #868e96;
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
        <Link href="/timeline">Home</Link>
        <Link href="/dm">DM</Link>
        <Link href="/explore">explore</Link>

      </ButtonGroup>
    </HeaderWrapper>
  );
};

export default Header;
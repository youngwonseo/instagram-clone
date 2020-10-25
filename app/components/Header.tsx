import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { shadow } from '../lib/styles/styleUtils';


const HeaderWrapper = styled.header`
  position: sticky;
  /* top: 0; */
  display: flex;
  align-items: center;
  background-color: 'white';
  height: 54px;
  ${shadow(1)};
`;


const Logo = styled.img.attrs({
  src: '/logo.png'
})`
  height: 34px;
`;



const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
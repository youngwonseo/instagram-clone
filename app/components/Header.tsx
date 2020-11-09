import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { shadow } from '../lib/styles/styleUtils';


const HeaderWrapper = styled.header`
  /* position: fixed; */
  /* top: 0;
  left: 0;
  right: 0; */
  position: sticky;

  /* top: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
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
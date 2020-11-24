import React from 'react';
import styled from 'styled-components';
import AccountMenuItem from './menu/AccountMenuItem';


const AccountMenuWrapper = styled.ul`
  
`;

interface Props {}

const AccountMenu: React.FC<Props> = () => {
  return (
    <AccountMenuWrapper>
      <AccountMenuItem>프로필 편집</AccountMenuItem>
      <AccountMenuItem>비밀번호 변경</AccountMenuItem>
      <AccountMenuItem>앱 및 웹사이트</AccountMenuItem>
      <AccountMenuItem>이메일 및 SMS</AccountMenuItem>
      <AccountMenuItem>푸시 알람</AccountMenuItem>
      <AccountMenuItem>연락처 관리</AccountMenuItem>
      <AccountMenuItem>공개 범위 및 보안</AccountMenuItem>
      <AccountMenuItem>로그인 활동</AccountMenuItem>
      <AccountMenuItem>Instagram에서 보낸 이메일</AccountMenuItem>
    </AccountMenuWrapper>
  );
}


export default AccountMenu;
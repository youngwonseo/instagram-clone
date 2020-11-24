import React from 'react';
import { GetServerSideProps } from 'next';
import AccountTemplate from '../components/accounts/AccountTemplate';
import AccountMenu from '../components/accounts/AccountMenu';
import AccountEdit from '../components/accounts/edit/AccountEdit';


const Login: React.FC = () => {
  return (
    <AccountTemplate>     
      <AccountMenu/>
      <AccountEdit/>
    </AccountTemplate>
  );
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Login;


import React from 'react';
import { GetServerSideProps } from 'next';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';

const Login: React.FC = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Login;


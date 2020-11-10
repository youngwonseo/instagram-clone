import React from 'react';
import { GetServerSideProps } from 'next';
import LoginForm from '../components/login/LoginForm';

const Login: React.FC = () => {
  return <LoginForm/>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Login;


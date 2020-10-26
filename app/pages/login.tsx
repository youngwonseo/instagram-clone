import React from 'react';
import { GetServerSideProps } from 'next';

const Login: React.FC = () => {
  return <div>Login</div>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Login;


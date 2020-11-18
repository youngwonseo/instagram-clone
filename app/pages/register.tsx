import React from 'react';
import { GetServerSideProps } from 'next';

import RegisterForm from '../components/auth/RegisterForm';

const Register: React.FC = () => {
  return <RegisterForm/>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Register;


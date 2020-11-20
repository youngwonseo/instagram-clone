import React from 'react';
import { GetServerSideProps } from 'next';

import RegisterForm from '../components/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const Register: React.FC = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Register;


import React from 'react';
import { GetServerSideProps } from 'next';

const Register: React.FC = () => {
  return <div>Register</div>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Register;


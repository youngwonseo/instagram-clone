import React from 'react';
import { GetServerSideProps } from 'next';

const TimeLine: React.FC = () => {
  return <div>Timeline</div>;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default TimeLine;


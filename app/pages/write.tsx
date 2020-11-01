import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Editor from '../components/post/Editor';

const Write: React.FC = () => {

  

  const [form, setForm] = useState();


  const handleChange = (e: any) => {

  };

  const handleSubmit = () => {
    // useCreatePostMutation
    
    
  };

  return <Editor form={form} handleChange={handleChange} handleSubmit={handleSubmit} />;
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Write;


import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Editor from '../components/post/Editor';
import { useCreatePostMutation } from '../generated/graphql-frontend';

const Write: React.FC = () => {

  
  const [form, setForm] = useState({contents: ''});

  const [createPost, { loading, error }] = useCreatePostMutation({
    onCompleted: () => {
      onSuccess();
      setForm({ contents: ''});
    }
  });

  useEffect(()=>{
    console.log(error);
  },[error])

  const onSuccess = () => {
    //result.refetch;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // console.log(form);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    console.log(form);

    e.preventDefault();
    if(!loading){
      try{
        await createPost({variables: {input: form }});
      }catch(e){
        console.log(e);
      }
    }
  };

  return (
    
    <Editor
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    
  );
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Write;
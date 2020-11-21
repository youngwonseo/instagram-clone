import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import storage from '../../lib/storage';
import { useAuthenticateQuery, useAuthenticateLazyQuery } from '../../generated/graphql-frontend';

import { stringify } from 'querystring';


const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  const [authenticate, { loading, data: auth }] = useAuthenticateLazyQuery();
  
  const [form, setForm] = useState({
    email: "jazz9008@gmail.com",
    password: "123",
  });

  const router = useRouter();

  useEffect(()=>{    
    if(auth && auth.authenticate){
      //로그인 성공
      storage.set('token', auth.authenticate);
      router.push('/timeline');
    }else{
      //로그인 실패

    }


  },[auth]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authenticate({
      variables: { input: { ...form } },
    });
        
    // if (data && data.authenticate) {
    //   // 로그인 성공
    // } else {
    //   //로그인 실패
    // }
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <input name="email" onChange={handleChange} value={form.email}/>
      <input name="password" onChange={handleChange} value={form.password}/>
      <button>Login</button>
      <Link href="/register">Register</Link>
    </LoginFormWrapper>
  );
};

export default LoginForm;
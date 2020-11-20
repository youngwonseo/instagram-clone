import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useAuthenticateQuery } from '../../generated/graphql-frontend';

const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const RegisterForm = () =>{

  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const {name, value} = e.target;
    
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    



  }

  return (
    <RegisterFormWrapper onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} />
        <input name="username" onChange={handleChange} />
        <input name="password" onChange={handleChange} />
        <button>register</button>
        <Link href="/login">back</Link>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthenticateQuery } from '../../generated/graphql-frontend';

const RegisterFormWrapper = styled.div`

`;

const RegisterForm = () =>{

  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const {name, value} = e.target;
    
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = useAuthenticateQuery({
      variables: { input: { email, password } },
    });

    

  }

  return (
    <RegisterFormWrapper>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} />
        <input name="username" onChange={handleChange} />
        <input name="password" onChange={handleChange} />
      </form>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
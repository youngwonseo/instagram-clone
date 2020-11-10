import React from 'react';
import styled from 'styled-components';


const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return(
    <LoginFormWrapper onSubmit={handleSubmit}>
      
      <input name="username" onChange={handleChange}/>
      <input name="password" onChange={handleChange}/>
      <button>Login</button>
      
    </LoginFormWrapper>
  )
};

export default LoginForm;
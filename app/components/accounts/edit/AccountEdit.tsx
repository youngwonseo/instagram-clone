import React, { useState } from 'react';
import styled from 'styled-components';


const AccountEditWrapper = styled.div`
`;


interface Props {}

const AccountEdit: React.FC<Props> = ({ }) => {


  //get user info
  const [form, setForm] = useState({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  }


  return (
    <AccountEditWrapper>
      <form onSubmit={handleSubmit}>
        <div>

        </div>
        <div>
          <label>이름</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>사용자이름</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>웹사이트</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>소개</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>이메일</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>전화번호</label>
          <input type="text" onChange={handleChange}/>
        </div>
        <div>
          <label>성별</label>
          <input type="text"/>
        </div>
      </form>
    </AccountEditWrapper>
  );
};

export default AccountEdit;
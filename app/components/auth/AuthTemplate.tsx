import React from 'react';
import styled from 'styled-components';

const AuthTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {};

const AuthTemplate: React.FC<Props> = ({
  children
}) => {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
};

export default AuthTemplate;
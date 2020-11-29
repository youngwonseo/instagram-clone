import React from 'react';
import styled from 'styled-components';

const TemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props{};


const Template: React.FC<Props> = ({ children }) => {
  return <TemplateWrapper>{children}</TemplateWrapper>;
};

export default Template;
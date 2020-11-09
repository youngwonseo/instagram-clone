import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
  display: flex;
`;

interface Props {
  contents: any;
};


const Comment: React.FC<Props> = ({ contents }) => {
  return <CommentWrapper>{contents}</CommentWrapper>;
};

export default Comment;
import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  comments: any;
};

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <CommentListWrapper>
      {comments &&
        comments.map((comment: any) => <Comment key={comment.idx} contents={comment.contents} />)}
    </CommentListWrapper>
  );
};

export default CommentList;
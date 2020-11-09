import React, { useState } from 'react';
import styled from 'styled-components';
import { useCreateCommentMutation } from '../../generated/graphql-frontend';

const CommentEditorInputText = styled.input`
  padding: 0.5rem 0.2rem;
`;

interface Props {
  post_idx: any;
};




const CommentEditor: React.FC<Props> = ({ post_idx }) => {
  const [comment, setComment] = useState("");

  const [createComment, { loading, error }] = useCreateCommentMutation({
    onCompleted: () => {
      // onSuccess();
      setComment('');
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setComment(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!loading){
      try{
        await createComment({
          variables: { input: { post_idx: post_idx, contents: comment } },
        });
      }catch(e){
        console.log(e);
      }
    }
    // 댓글 작성
  };

  return (
    <form onSubmit={handleSubmit}>
      <CommentEditorInputText
        value={comment}
        placeholder="댓글 달기..."
        onChange={handleChange}
      />
    </form>
  );
};

export default CommentEditor;
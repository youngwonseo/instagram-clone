import React from 'react';
import styled from 'styled-components';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';
import { useCommentsQuery } from '../../generated/graphql-frontend';
import Like from './Like';
import Profile from './Profile';


const PostWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #868e96;

  width: 500px;
  
  margin: 1rem 0rem;
`;

const Img = styled.img`
  width: 100%;
`;


interface Props {
  idx: any;
  contents: any;
};

const Post: React.FC<Props> = ({
  idx,
  contents
}) => {


  // 댓글리스트
  const result = useCommentsQuery({ variables: { post_idx: idx } });
  
  const comments =result.data?.comments;
  
  

  return (
    <PostWrapper>
      <Profile/>
      <Img src="/the_starry_night.jpg" alt="Avatar" />
      <Like/>
      {idx}, {contents}
      <div>
        1시간 전에
      </div>
      <CommentList comments={comments}/>
      <CommentEditor post_idx={idx}/>
    </PostWrapper>
  );

};

export default Post;
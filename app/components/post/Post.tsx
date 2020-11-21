import React from 'react';
import styled from 'styled-components';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';
import { useCommentsQuery } from '../../generated/graphql-frontend';
import Like from './Like';
import PostHeader from './PostHeader';


const PostWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid #868e96;

  /* width: 500px; */
  
  margin: 1rem 0rem;
`;

const Img = styled.img`
  width: 100%;
`;


const PostDate = styled.div`
  padding-left: 16px;
  font-size: 14px;
  color: #868e96;
`;


const PostContents = styled.div`
  display: flex;
  flex-direction: column;
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
      <PostHeader username="youngwon" location="aa"/>
      <Img src="/the_starry_night.jpg" alt="Avatar" />

      <PostContents>
      <Like/>
      {idx}, {contents}

      <CommentList comments={comments}/>
      <PostDate>
        1시간 전에
      </PostDate>      
      <CommentEditor post_idx={idx}/>
      </PostContents>
    </PostWrapper>
  );

};

export default Post;
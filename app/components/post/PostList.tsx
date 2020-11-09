import React from 'react';
import Post from './Post';
import styled from 'styled-components';


const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


interface Props{posts: any};

const PostList: React.FC<Props> = ({
  posts
}) => {
  return (
    <PostListWrapper>
      {posts.map((post: any) => (
        <Post key={post.idx} idx={post.idx}contents={post.contents} />
      ))}
    </PostListWrapper>
  );

};

export default PostList;
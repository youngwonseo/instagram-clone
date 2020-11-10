import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { usePostsQuery } from '../generated/graphql-frontend';
import PostList from '../components/post/PostList';

import styled from 'styled-components';

const TimeLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;



const TimeLine: React.FC = () => {

  
  const result = usePostsQuery({});
  
  const posts =result.data?.posts;
  
  useEffect(()=>{
    // console.log(result);
  },[result]);


  return (
    <TimeLineWrapper>
      {result.loading && !posts ? (
        <p>Loading...</p>
      ) : result.error ? (
        <p>error occured.</p>
      ) : posts && posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>no data</p>
      )}
    </TimeLineWrapper>
  );
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default TimeLine;


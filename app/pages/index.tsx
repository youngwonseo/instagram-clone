import Head from 'next/head'

import { initializeApollo } from '../lib/client';
import { usePostsQuery } from '../generated/graphql-frontend';
import { useEffect } from 'react';
import Template from '../components/common/Template';
import PostList from '../components/post/PostList';



export default function Home() {
  
  const result = usePostsQuery({});
  
  const posts =result.data?.posts;
  
  useEffect(()=>{
    // console.log(storage.get('token'));
  },[result]);

  return (
    <Template>
      {result.loading && !posts ? (
        <p>Loading...</p>
      ) : result.error ? (
        <p>error occured.</p>
      ) : posts && posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>no data</p>
      )}
    </Template>
  );
}

// render static site ( before rendering)
export const getStaticProps = async () => {
  return { props: {} };
}

import Head from 'next/head'

import { initializeApollo } from '../lib/client';
import { useTasksQuery, TasksQuery, TasksDocument } from '../generated/graphql-frontend';


export default function Home() {
  const result = useTasksQuery();
  const tasks = result.data?.tasks;

  return (
    <div>
      sdd
      {tasks && tasks.length > 0 && tasks.map((task) => {
        return (
          <div key={task.id}>
            {task.title} ({task.status})
          </div>
        );
      })}
    </div>
  );
}

// render static site ( before rendering)
export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  //store cache
  await apolloClient.query<TasksQuery>({
    query: TasksDocument,
  });

  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
    }    
  }
}

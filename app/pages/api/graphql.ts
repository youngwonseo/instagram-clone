import { ApolloServer, AuthenticationError } from 'apollo-server-micro';
import { db } from '../../backend/db';
import { schema } from '../../backend/schema';

// backend에서 실행됨

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    // if(!req.headers.authorization)
    //   throw new AuthenticationError("missing token!");

    // console.log(req.headers['content-type'])
    // const token = req.headers.authroization.substr(7);
    // const user = users.find((user) => user.token === token);
    // if(!user) throw new AuthenticationError("invalid token!");
    // return { user, db };
    return { db };
  },  
});

export const config = {
  api: {
    bodyParser: false,
  },
}

// export default apolloServer.listen(); //({ path: '/api/graphql' })
export default apolloServer.createHandler({ path: '/api/graphql' });

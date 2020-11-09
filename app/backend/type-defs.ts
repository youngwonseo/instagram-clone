import { gql } from "apollo-server-micro";
// 백엔드이기 때문에 apollo-server-micro를 사용

export const typeDefs = gql`

  input AuthenticateInput {
    email: String!
    password: String!
  }
  
  enum TaskStatus {
    active
    completed
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }
  
  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }

  input CreatePostInput {
    contents: String!
  }

  input UpdatePostInput {
    idx: Int!
    contents: String!
  }

  input CreateCommentInput {
    post_idx: Int!
    contents: String!
  }

  type User {
    idx: Int!
    username: String!
    email: String!
    hashed_password: String!
  }

  type Post {
    idx: Int!
    contents: String!
  }
  
  type Comment {
    idx: Int!
    post_idx: Int!
    contents: String!
  }


  type Query {
    authenticate(input: AuthenticateInput!): User
    me: User
    users: [User]
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
    posts: [Post!]!
    post(idx: Int!): Post
    comments(post_idx: Int!): [Comment!]!
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    deleteTask(id: Int!): Task
    createPost(input: CreatePostInput!): Post
    updatePost(input: UpdatePostInput!): Post
    deletePost(idx: Int!): Post
    createComment(input: CreateCommentInput!): Comment
  }
`;

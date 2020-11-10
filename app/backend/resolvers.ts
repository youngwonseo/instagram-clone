import { Resolvers, TaskStatus } from "../generated/graphql-backend";
import { ServerlessMysql } from 'serverless-mysql';
import { OkPacket} from 'mysql';
import { UserInputError } from "apollo-server-micro";
import { isContext } from "vm";
import CommentList from "../components/post/CommentList";

interface ApolloContext {
  db: ServerlessMysql;
}



interface TaskDbRow {
  id: number;
  title: string;
  task_status: TaskStatus;
}

type TasksDbQueryResult = TaskDbRow[];

type TaskDbQueryResult = TaskDbRow[];


/** User */
interface UserDbRow {
  idx: number;
  username: string;
  email: string;
  hashed_password: string;
}


/** Post */
interface PostDbRow {
  idx: number;
  contents: string;
}

type PostsDbQueryResult = PostDbRow[];

interface CommentDbRow {
  idx: number;
  post_idx: number;
  contents: string;
}

type CommentsDbQueryResult = CommentDbRow[];


/** Follow */



/** Image */


/** File */

/** HashTag */





const getTaskById = async (id: number, db: ServerlessMysql ) => {
  const tasks = await db.query<TaskDbQueryResult>(
    "SELECT id, title, task_status FROM tasks WHERE id = ?",
    [id]
  );
  return tasks.length
    ? {
        id: tasks[0].id,
        title: tasks[0].title,
        status: tasks[0].task_status,
      }
    : null;
}


export const resolvers: Resolvers<ApolloContext> = {
  Query: {
    //codegen 후 params의 타입이 정해짐
    async authenticate(parent, args, context) {
      const user = await context.db.query<UserDbRow>(
        "SELECT username FROM users WHERE email = ? and hashed_password = ?",
        [args.input.email, args.input.password]
      );
      return user;
    },
    // me(parent, args, context) {

    // },
    //parent는 User object
    async tasks(parent, args, context) {
      const { status } = args;
      let query = "SELECT id, title, task_status FROM tasks";
      const queryParams: string[] = [];
      if (status) {
        query += " WHERE task_status = ?";
        queryParams.push(status);
      }
      const tasks = await context.db.query<TasksDbQueryResult>(
        query,
        queryParams
      );
      await context.db.end();
      return tasks.map(({ id, title, task_status }) => ({
        id,
        title,
        status: task_status,
      }));
    },
    async task(parent, args, context) {
      // return await getTaskById(args.id, context.db);
      return null;
    },
    async post() {
      return null;
    },
    async posts(parent, args, context) {
      const posts = await context.db.query<PostsDbQueryResult>(
        "SELECT * FROM posts"
      );
      await context.db.end();
      return posts;
    },
    async comments(parent, args, context) {
      const comments = await context.db.query<CommentsDbQueryResult>(
        "SELECT * FROM comments WHERE post_idx = ?",
        [args.post_idx]
      );
      await context.db.end();
      return comments;
    },
  },
  Mutation: {
    async createTask(parent, args: { input: { title: string } }, context) {
      const result = await context.db.query<OkPacket>(
        "INSERT INTO tasks (title, task_status) VALUES(?, ?)",
        [args.input.title, TaskStatus.Active]
      );
      return {
        id: result.insertId,
        title: args.input.title,
        status: TaskStatus.Active,
      };
    },
    async updateTask(parent, args, context) {
      const columns: string[] = [];
      const sqlParams: any[] = [];

      if (args.input.title) {
        columns.push("title = ?");
        sqlParams.push(args.input.title);
      }

      if (args.input.status) {
        columns.push("task_status = ?");
        sqlParams.push(args.input.status);
      }

      sqlParams.push(args.input.id);
      await context.db.query<OkPacket>(
        `UPDATE tasks SET ${columns.join(",")} WHERE id = ?`,
        sqlParams
      );

      const updatedTask = await getTaskById(args.input.id, context.db);
      return updatedTask;
    },
    async deleteTask(parent, args, context) {
      const task = await getTaskById(args.id, context.db);
      if (!task) {
        throw new UserInputError("Could not find your task.");
      }
      await context.db.query("DELETE FROM tasks WHERE id = ?", [args.id]);
      return task;
    },
    async createPost(parent, args: { input: { contents: string } }, context) {
      const result = await context.db.query<OkPacket>(
        "INSERT INTO posts (contents) VALUES(?)",
        [args.input.contents]
      );
      return {
        idx: result.insertId,
        contents: args.input.contents,
      };
    },
    // async updatePost(parent, args: { input: { idx: number, contents: string } }, context) {
    //   const result = await context.db.query(
    //     "UPDATE posts SET contents = ? WHERE idx = ? ",
    //     [args.input.contents, args.input.idx]
    //   );

    //   const updatedPost = await context.db.query<PostsDbQueryResult>(
    //     "SELECT * FROM posts WHERE idx = ? ",
    //     [args.input.idx]
    //   );
    //   return updatedPost.length > 0 ? {
    //     idx: updatedPost[0].idx,
    //     contents: updatedPost[0].contents,
    //     writer_idx: updatedPost[0].writer_idx
    //   } : null;
    // },
    // async deletePost(parent, args, context){
    //   const posts = await context.db.query<PostsDbQueryResult>(
    //     "SELECT * FROM posts WHERE idx = ? ",
    //     [args.idx]
    //   );

    //   if(posts.length > 0){
    //     await context.db.query('DELETE FROM posts WHERE idx = ? ', [args.idx]);
    //   }

    //   return posts.length > 0 ? {
    //     idx: posts[0].idx,
    //     contents: posts[0].contents,
    //     writer_idx: posts[0].writer_idx
    //   } : null;
    // }
    async createComment(
      parent,
      args: { input: { post_idx: number; contents: string } },
      context
    ) {
      const result = await context.db.query<OkPacket>(
        "INSERT INTO comments (post_idx, contents) VALUES(?, ?)",
        [args.input.post_idx, args.input.contents]
      );

      return {
        idx: result.insertId,
        post_idx: args.input.post_idx,
        contents: args.input.contents,
      };
    },
    async singleUpload(_, {file}, context) {
      
      const { filename, mimetype, encoding } = await file;
      
      console.log(filename, mimetype, encoding);
      

      return {
        filename: '1',
        mimetype: '1',
        encoding: '1'
      }
    },
  },
};
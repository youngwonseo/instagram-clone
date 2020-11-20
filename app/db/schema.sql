DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;


CREATE TABLE IF NOT EXISTS tasks (
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  task_status VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE IF NOT EXISTS users (
  idx INT UNSIGNED AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  token VARCHAR(255),
  PRIMARY KEY (idx)
);
INSERT INTO users(username, email, hashed_password, token) values('youngwon','jazz9008@gmail.com','123','token1112');


CREATE TABLE IF NOT EXISTS follows (
  idx INT UNSIGNED AUTO_INCREMENT,
  follow_idx INT UNSIGNED NOT NULL,
  follower_idx INT UNSIGNED NOT NULL,
  PRIMARY KEY (idx),
  FOREIGN KEY (follow_idx) REFERENCES users (idx),
  FOREIGN KEY (follower_idx) REFERENCES users (idx)
);


CREATE TABLE IF NOT EXISTS posts (
  idx INT UNSIGNED AUTO_INCREMENT,
  contents VARCHAR(255) NOT NULL,
  -- img_url VARCHAR(255) NOT NULL,
  -- writer_idx INT UNSIGNED NOT NULL,
  PRIMARY KEY (idx)
  -- FOREIGN KEY (writer_idx) REFERENCES users (idx)
);

CREATE TABLE IF NOT EXISTS comments (
  idx INT UNSIGNED AUTO_INCREMENT,
  post_idx INT UNSIGNED NOT NULL,
  contents VARCHAR(255) NOT NULL,
  PRIMARY KEY (idx),
  FOREIGN KEY (post_idx) REFERENCES posts (idx)
);
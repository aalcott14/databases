CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT, 
  PRIMARY KEY(id),
  name TEXT
);
CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  PRIMARY KEY(id),
  name TEXT
);
CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  PRIMARY KEY(id),
  message TEXT,
  users_id INTEGER,
  FOREIGN KEY (users_id) 
  REFERENCES users(id)
  ON DELETE CASCADE,
  rooms_id INTEGER,
  FOREIGN KEY (rooms_id) 
  REFERENCES rooms(id)
  ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


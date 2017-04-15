CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  message TEXT,
  user TEXT,
  room TEXT
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  name TEXT
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


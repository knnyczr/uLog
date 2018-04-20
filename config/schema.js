\c ulog
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(30) NOT NULL,
  username VARCHAR(15) NOT NULL,
  password VARCHAR(20) NOT NULL,
  image VARCHAR(20),
  description VARCHAR(150)
);

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  creator INT REFERENCES users (id),
  caption VARCHAR(150),
  url VARCHAR(200)
);

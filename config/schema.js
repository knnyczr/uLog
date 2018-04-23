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


INSERT INTO users (email, username, password, image, description)
VALUES
('isdc', 'peter', 'pass', 'vjnvkd', 'acsrvrsv'),
('dc', 'kenny', 'pass', 'vjnvkd', 'acsrvrsv'),
('is', 'aasim', 'pass', 'vjnvkd', 'acsrvrsv');

INSERT INTO photos (creator, caption, url)
VALUES
(1, 'thiscaption', 'https://images.unsplash.com/photo-1524244310120-3af0bc67465e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cd0c4dd9cc2ac10902de1d461a0a38a&auto=format&fit=crop&w=1951&q=80'),
(1, 'thiscaption', 'https://images.unsplash.com/photo-1524205404565-1fcf64c48d63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9452070aa97fbfde1ca15838223ee40&auto=format&fit=crop&w=934&q=80'),
(2, 'thiscaption', 'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5adde3953c33ac273a33a2a990aa7e80&auto=format&fit=crop&w=1950&q=80'),
(3, 'thiscaption', 'https://images.unsplash.com/photo-1507067100611-3c1b9c21c53f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f47c2399a15c389a2bbd4df313e124a4&auto=format&fit=crop&w=2850&q=80'),
(3, 'thiscaption', 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab5c208787458272964e09fb4c19cb1f&auto=format&fit=crop&w=1100&q=80');

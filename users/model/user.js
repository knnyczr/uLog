const pgp      = require('pg-promise')({
  query: q => console.log(q.query),
});
const dbConfig = require('../../config/dbConfig');

module.exports = {
  // this is for when a user is trying to log in with
  // their username or their email.
  findOne(username){
    return db.one( `
      SELECT *
      FROM users
      WHERE username = $1 OR email = $1
      `, username)
  },
  save(user){
    return db.one(`
    INSERT INTO users(
      email,
      username,
      password,
      image,
      description
    ) VALUES (
      $/email/,
      $/username/,
      $/password/,
      $/image/,
      $/description/
    )
    ON CONFLICT (username) DO UPDATE SET
    email = $/email/,
    username = $/username/,
    password = $/password/,
    image = $/iamge/,
    description = $/description/
    RETURNING *
      `, user)
  },
  destroy(username){
    return db.none(`
      DELETE
      FROM users
      WHERE username = $1
      `, username)
  }
};

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);

module.exports = {
  findAllPosts(){
    return db.many(`
      SELECT * FROM photos
      `);
  },
  findOne(id){
    return db.one(`
      SELECT *
      FROM photos
      WHERE photos.id = $1
        `, id)
  },
  createPost(photos){
    return db.one(`
      INSERT INTO photos (caption, url)
      VALUES($1, $2)
      RETURNING *`, [photos.caption, photos.url])
  },
  updatePost(post, id){
    return db.one(`
      UPDATE photos(creator, caption, url)
      SET creator = $1,
      caption = $2,
      url = $3,
      WHERE id = $4
      RETURNING *
      `, [post.creator, post.caption, post.url], id)
  },
  destroy(id){
    return db.none(`
      DELETE FROM photos
      WHERE id = $1
      `, id)
  },

};

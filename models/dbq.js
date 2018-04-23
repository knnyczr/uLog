const db = require('../config/dbConfig');

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
      UPDATE photos(caption, url)
      SET caption = $1,
      url = $2,
      WHERE id = $3
      RETURNING *
      `, [post.caption, post.url, id])
  },
  destroy(id){
    return db.none(`
      DELETE FROM photos
      WHERE id = $1
      `, id)
  },

};

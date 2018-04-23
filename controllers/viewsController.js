module.exports = {

  showAllPosts(req,res){
    // debugger;
    res.render('postViews/index', {
      data: res.locals.photos
    });
  },
  createOne(req,res){
    res.render('postViews/create')
  },
  sendPost(req,res){
    posts = res.locals.posts
    res.redirect(`posts/${photos.id}`)
  }
}

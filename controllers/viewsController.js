module.exports = {

  showAllPosts(req,res){
    // debugger;
    res.render('postViews/index', {
      data: res.locals.photos
    });
  },
  showOne(req,res){
    res.render('postViews/showOne',{
      data: res.locals.photos.id
    })
  },
  createOne(req,res){
    res.render('postViews/create')
  },
  sendPost(req,res){
    posts = res.locals.posts
    res.redirect(`posts/${photos.id}`)
  },
  edit(req,res){
    res.render('postViews/edit',{
      data: res.locals.photos.id
    })
  },
  // destroy(req,res){
  //   res.redirect(``)
  // }
}

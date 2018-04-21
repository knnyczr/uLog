const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const postRouter = require('./routes/postRouter');
const session = require('express-session');
const path = require('path')

const authS = require('./users/auth/authService');
const authR = require('./users/auth/authRouter')

// port destination
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// morgan logger
app.use(logger('dev'));

// app.use(session({
//   secret:            app.get('secret'),
//   resave:            false,
//   saveUnitialized:   false,
// }));


// this has access to style, and js at the root directory
app.use(express.static(path.join(__dirname, 'public')));

// all routes to ROUTER
// peter --> to add back in later
// app.use('/', router);
app.use('/', postRouter);

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send('Sorry something went wrong.');
});

// starting server on 3000
app.listen(port, () =>{
  console.log(`Server Up and running on port ${port}, in ${app.get('env')}`)
})

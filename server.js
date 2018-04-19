const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/router')

const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', router);


app.listen(port, () =>{
  console.log(`Server Up and running on port ${port}, in ${app.get('env')}`)
})

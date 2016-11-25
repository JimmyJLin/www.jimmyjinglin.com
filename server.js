const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);
const request = require('request');


/* express server setting  */
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'ejs');

/* routes */



/* api routes */
app.get('/', function(req, res){
  res.render('pages/index')
})

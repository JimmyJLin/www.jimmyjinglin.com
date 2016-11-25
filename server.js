const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);

// let styleSrc;
// let javascriptSrc;
// if (process.env.NODE_ENV === 'production'){
//   console.log("Production Mode")
//   let cssRefManifest = require('./public/css/rev-manifest.json')
//   let jsRefManifest = require('./public/js/rev-manifest.json')
//
//   styleSrc = `/${cssRefManifest['main.css']}`;
//   javascriptSrc = `/${jsRefManifest['main.js']}`
// } else {
//   console.log("Development Mode")
//   styleSrc = './app/sass/main.scss';
//   javascriptSrc = './app/js/main.js';
// }

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

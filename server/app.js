require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session')
const MongoStore   = require("connect-mongo")(session);
const multer = require('multer');


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/JustMusicallySpeaking', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

//spotify
var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste your credentials here
var clientId = 'd231ca46592a4636a7f5cebe09b19dbd',
    clientSecret = '6215b49e5ba149f5b56c98d22c60d3d4';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

// cors
app.use(require('cors')({
  credentials: true,
  origin: true
}))

app.use(session({
  store: new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:24*60*60
  }),
  secret: 'bliss',
  saveUninitialized: true,
  resave: false,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//multer
app.use(multer({ dest: '../public/assets' }).single('image'));

//passport setup

const passport = require('./helpers/passport')
app.use(passport.initialize())
app.use(passport.session())



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');

const auth = require('./routes/auth')
const add = require('./routes/addSong')
const profile = require('./routes/profile')
const list = require('./routes/list')


app.use('/', index)
app.use('/', auth);
app.use('/add', add)
app.use('/profile', profile)
app.use('/list', list)


module.exports = app;

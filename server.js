const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const dirPath = path.join(__dirname, '/logs');

// //npm login
// const connect = require("connect"); 
// //const postmark = require("postmark")(POSTMARK_API_KEY);
// const postgres = require("pg");

// const login = require("login").postgresql;
// const appExpress = express.createServer();


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const accessLogStream = rfs.createStream('apiRequests.log', {
  interval: '1d',
  path: dirPath,
});

app.use(morgan('combined', { stream: accessLogStream }));


app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening http://localhost:3001/'));
});

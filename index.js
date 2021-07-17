const { static } = require('express');
const express = require('express');
var handlebars  = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routers');
const db = require('./config/db');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

// use session express
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true 
    }
}))

// connect to DB
db.connect();

// use session to check is logged or not?
app.use(async function(req,res,next){
  if (req.session.isAuthenticated === undefined){
    req.session.isAuthenticated = false;
  }

  res.locals.lcIsAuthenticated = req.session.isAuthenticated;
  res.locals.lcAuthUser = req.session.authUser;
  next();
})

// static files
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir));

//HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// use json
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

// route init
route(app);

app.listen(port, () => {
  console.log(`app listening at port:${port}`);
});

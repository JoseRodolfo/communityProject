const express = require('express');
// mongoose used to connect to mongodb
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const app = express();

// DB config
const db = require('./config/keys').mongoURI

// setup to connect to mongoDB
mongoose
  .connect(db)
  .then(()=> console.log('mongoDB connected'))
  .catch(err => console.log(err));

// a route to the home page, second param in es6 is in single line function syntax takes in req object (requested object with HTTP info) and res object (response object with HTTP info).
app.get('/', (req, res) => res.send('Hello!') )

// routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

// running to port in: process.env.PORT (heroku) || ( || =or) port 5000 (locally)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));

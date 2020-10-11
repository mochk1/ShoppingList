const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 8080
const routes = require('./routes.js')
const cors = require('cors');
var bodyParser = require('body-parser')
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.use(routes);


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
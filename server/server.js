const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require('./routes.js')
const cors = require('cors');
var bodyParser = require('body-parser')
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.use(routes);


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT 
const routes = require('./routes.js')
const cors = require('cors');
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.use(routes);


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
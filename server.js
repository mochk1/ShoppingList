const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 8080
const routes = require('./routes.js')
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')
const mongoose  = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())
app.use(routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

})
}

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
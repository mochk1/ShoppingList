require('dotenv').config();
const mongoose = require('mongoose');
const uri = "mongodb+srv://MainUser:dbatlasmainuser321@cluster0.m9wv8.mongodb.net/ShoppingList?retryWrites=true&w=majority";
  
const Item = require('./Item')


mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {console.log('MongoDB Connected…')})
.catch(err => console.log(err))
mongoose.Promise = global.Promise;

mongoose.connection.on('connected',()=> console.log('it works'))
mongoose.connection.on('error', err => {logError(err);});


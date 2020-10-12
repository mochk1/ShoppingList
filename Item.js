const mongoose  = require('mongoose');
const { Schema } = mongoose;


const ItemSchema = new Schema({
    
    todo: {type:String},
    time: {type:Number}
})

const Item = mongoose.model('Item',ItemSchema)

module.exports = Item;
const express = require('express')
const app = express()
const router = express.Router();
const Datastore = require('nedb');
const db = new Datastore({ filename: 'List.db' });


  /* LOAD DB */

db.loadDatabase(function (error) {   
    if (error) {
        console.log( error);
        throw error;
      }
      console.log('local database loaded successfully.');});

 /* GET ALL  */
      
router.get('/', (req, res) => {

   db.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
 console.log('server done!')
 });
})


 /* ADD  */

 router.post('/addtodo', (req, res) => {
  db.insert(req.body, function (err, newDoc) { 
  });

  db.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
    console.log(data)
  });


  ;})


 /* DELETE  */

 router.post('/deletetodo', (req, res) => {
     
 db.remove({ _id: req.body.todoid }, {}, function (err, data) {
    console.log(req.body.todoid)
});
db.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
    console.log(data)
  });
;
  ;})




  module.exports = router
const express = require('express')
const app = express()
const router = express.Router();
const mongoose  = require('mongoose');
const Items = require('./Item')
require('./connect')
/* const Datastore = require('nedb');
const db = new Datastore({ filename: 'List.db'}); */


/*---------------------------- MONGO ATLAS -------------------------------- */


/* GET ALL */

router.get('/api', async(req, res) => {

  await Items.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
    console.log(data)
  });
})


 /* ADD  */

 router.post('/addtodo',  async(req, res) => {
   
 await  Items.create({ todo: req.body.todo, time:req.body.time })

   Items.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
    console.log(req.body.todo)
  });

  ;
})



/* DELETE */

router.post('/deletetodo', async(req, res) => {

  await Items.deleteOne({ _id: req.body.todoid }, {}, function (err, data) {
     console.log(req.body.todoid)
 });


 await Items.find({}).sort({ time: -1 }).exec(function (err, data) {
     res.json(data)
     console.log(data)
   });
 ;
   ;})




/*---------------------------- NEDB -------------------------------- */


  /* LOAD DB */

/* db.loadDatabase(function (error) {   
    if (error) {
        console.log( error);
        throw error;
      }
      console.log('local database loaded successfully.');});
 */
 /* GET ALL  */
      
/* router.get('/api', (req, res) => {

   db.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
 console.log(data)
 });
})
 */

 /* ADD  */

/*  router.post('/addtodo', (req, res) => {
  db.insert(req.body, function (err, newDoc) { 
  });

  db.find({}).sort({ time: -1 }).exec(function (err, data) {
    res.json(data)
    console.log(data)
  });


  ;}) */


 /* DELETE  */
/* 
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
 */



  module.exports = router
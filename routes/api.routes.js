
/*
congig routes modules
*/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'Node-BoilerPlate'
});




/*
Define Crud
*/
// CRUD: Create
router.post('/article', (req, res) => {

  // Verify if the title and the content are contain in the client request

  if (req.body && req.body.title.length > 0 && req.body.content.length > 0) {

    //DB Connection
    connection.connect();


    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) {
        res.json({ msg: 'Error create', err: error });
      }
      else {
        res.json({ msg: 'Create' });
      }
    });

    res.json({
      msg: 'Create',
      data: req.body
    });
  }
  else {
    res.json({
      msg: 'Create',
      error: 'No data'
    });
  }
});

// CRUD: Read
router.get('/article/:id', (req, res) => {
  res.json({
    msg: 'Read all',
    error: null
  });
});

// CRUD: Update
router.put('/article/:id', (req, res) => {
  res.json({
    msg: 'Update one by ID',
    error: null
  });
});

// CRUD: Delete
router.delete('/article/:id', (req, res) => {
  res.json({
    msg: 'Delete one by ID',
    error: null
  });
});
//


/*
Export router's modules
*/
module.exports = router;
//

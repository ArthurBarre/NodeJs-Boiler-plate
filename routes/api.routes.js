
/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/* 
MySql Config
*/
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 8889,
  database: 'node-boiler-plate'
});
//

/*
Define CRUd
*/
// CRUD: Create
router.post('/article', (req, res) => {

  /* 
test if title and content exist
  */
  if (req.body && req.body.title.length > 0 && req.body.content.length > 0) {

    // Connexion de la BDD
    connection.connect();

    // Define item
    const item = { title: req.body.title, content: req.body.content };

    // Send MySql data
    connection.query('INSERT INTO post SET ?', item, (error, results, fields) => {
      if (error) {
        res.json({ msg: 'Error create', err: error })
      }
      else {
        res.json({ msg: 'Create', data: results })
      }
    });

    // Close connection
    connection.end();
  }

  else {
    res.json({ msg: 'Create', error: 'No data' })
  }
});

// CRUD: Read
router.get('/article', (req, res) => {
  res.json({ msg: 'Read ALL', error: null })
});

// CRUD: Read
router.get('/article/:id', (req, res) => {
  res.json({ msg: 'Read one by ID', error: null })
});

// CRUD: Update
router.put('/article/:id', (req, res) => {
  res.json({ msg: 'Update one by ID', error: null })
});

// CRUD: Delete
router.delete('/article/:id', (req, res) => {
  res.json({ msg: 'Delete one by ID', error: null })
});
//


/*
Export Router Module
*/
module.exports = router;
//
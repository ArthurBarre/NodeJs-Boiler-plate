
/*
congig routes modules
*/
const express = require('express');
const router = express.Router();
//

/*
Define routes
*/
// Home
router.get('/', (req, res) => {
  res.render('index');
});

// About
router.get('/about', (req, res) => {
  res.render('about');
});
//


/*
export router's modules
*/
module.exports = router;
//
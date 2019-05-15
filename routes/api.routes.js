
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
  res.json({ msg: 'Hello API', error: null });
});

/*
export router's modules
*/
module.exports = router;
//

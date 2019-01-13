const express = require('express');
const router = express.Router();

// route to GET api/users/tests .... public route ... test users route
router.get('/test', (req, res) => res.json({msg: "users works"}));

module.exports = router;

const express = require('express');
const router = express.Router();

// route to GET api/profile/tests .... public route ... test profile route
router.get('/test', (req,res) => res.json({msg: "profile works"})
);

module.exports = router;

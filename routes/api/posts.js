const express = require('express');
const router = express.Router();

// route to GET api/posts/tests .... public route ... test posts route 
router.get('/test', (req,res) => res.json({msg: "posts works"})
);

module.exports = router;

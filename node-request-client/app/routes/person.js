const express = require('express');
const router = express.Router();
var names = [];

router.get('/', (req,res,next) => {
    res.send(names);
    res.send("End");
});
router.post('/add', (req,res,next) => {
    names.push(req.body.firstName);
    res.send("Added");
});

module.exports = router;
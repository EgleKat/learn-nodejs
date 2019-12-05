const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.sendFile("public/form.html", {root: process.cwd()}));

module.exports = router;

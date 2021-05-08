var express = require('express');
var router = express.Router();
var bank = require("./bank");

router.use("/bank",bank);

module.exports = router;

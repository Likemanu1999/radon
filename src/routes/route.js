const express = require('express');
const externalModule = require('../logger/logger')
const externalModule1 = require('../util/helper')
const externalModule2 = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {

    externalModule.log()
    externalModule1.help()
    externalModule2.form()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});



module.exports = router;
// adding this comment for no reason
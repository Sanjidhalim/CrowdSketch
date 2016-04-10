/**
 * Created by sanji on 4/10/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render('lobby', { Link: fullUrl });
});

module.exports = router;

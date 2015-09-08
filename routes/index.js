var express = require('express');
var router = express.Router();

var auth = require('./auth');
var grades = require('./grades');
var information = require("./information");
var schedule = require('./schedule');
var setRequestEndpoint = require("../helpers/setRequestEndpoint")

router.post('/login', auth.login);
router.get('/api/schedule',setRequestEndpoint(schedule));
router.get('/api/grades',setRequestEndpoint(grades));
router.get('/api/general',setRequestEndpoint(information));

module.exports = router;

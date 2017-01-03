'use strict';

var express = require('exress');

var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos:[]});
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* heart beat test page. */
router.get('/heartbeat', function(req, res) {
  //res.render('index', { title: 'I am woring well' });
  res.send('I am working well.');
});

module.exports = router;

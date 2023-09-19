var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Llegué aquí mediante un manejador de Contacto');
});

module.exports = router;
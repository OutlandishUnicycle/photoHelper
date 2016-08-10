var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app, express) {
  console.log('in the middle');

  app.use(bodyParser.json());
  app.use(morgan('dev'));
};
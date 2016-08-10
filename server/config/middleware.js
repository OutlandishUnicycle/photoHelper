var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors')

module.exports = function(app, express) {
  app.use(cors());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(morgan('dev'));
  console.log('in the middle');
};
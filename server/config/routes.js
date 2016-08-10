var uploadController = require('./uploads.js');

module.exports = function(app, express) {
  var router = express.Router();

  router.post('/createNewListing', uploadController.createNewListing);

  return router;
};
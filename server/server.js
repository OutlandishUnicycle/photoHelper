const express = require('express');
const app = express();
const Router = require('./config/routes.js')(app, express);
const port = process.env.PORT || 8080;


require('./config/middleware.js')(app, express);
app.use('/api', Router);

app.listen(port, console.log('listening to localhost:' +port));
module.exports = app;


const express = require('express');
const app = express();
const Router = require('./config/routes.js')(app, express);
const port = 8080;


require('./config/middleware.js')(app, express);
app.use('/api', Router);

app.listen(process.env.PORT || port, console.log('listening to localhost:3000'));
module.exports = app;


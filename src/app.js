'use strict';

const app = require('dwebserver');
app.use(require('./middlewares/example.js')());
require('dcontrollers')(app, [
  require('./controllers/example.js')()
]);

'use strict';

require('dnewrelic');

let app = require('dexpress');
app.use(require('dheaders'));
const dhttpAuth = require('dhttp-auth');
if (dhttpAuth) {
  app.use(dhttpAuth);
}
app.use(require('./middlewares/example.js')());
require('dcontrollers')(app, [
  require('./controllers/example.js')()
]);
app.use(app.express.static('www'));

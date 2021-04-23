'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/events']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/events?date=2021-02-22');
  }
  if (swaggerExpress.runner.swagger.paths['/map']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/map?date=2021-02-22');
<<<<<<< HEAD
=======
  }
  if (swaggerExpress.runner.swagger.paths['/places']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/places?date=2021-02-22');
>>>>>>> ca2750562a4073a28fc890ba0c13b2bb9282fcb2
  }
});

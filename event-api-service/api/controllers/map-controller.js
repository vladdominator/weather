'use strict';

var util = require('util');
var faker = require('faker');

module.exports = {
  map: getEvents
};


function getEvents(req, res) {
  var date = req.swagger.params.date.value || '2020-03-01';

  res.json([
    {
      "id": '' + faker.random.number(),
      "temperature": '' + faker.random.number({
          "min": 0,
          "max": 20
      }),
      "city": faker.address.city()
    }
  ]);
}
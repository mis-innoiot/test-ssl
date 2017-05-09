'use strict';

require('greenlock-express').create({

  server: 'staging'

, email: 'alfars215@gmail.com'

, agreeTos: true

, approveDomains: [ 'iot.me' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

}).listen(80, 443);

require('babel-register')({
  ignore: /(node_modules|dictionary\.js)/
});

require('./server.js');

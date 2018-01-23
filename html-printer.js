var httpsModule = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

httpsModule.getHTML(requestOptions, httpsModule.printHTML);
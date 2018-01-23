function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

  var bufferedData = '';

    response.setEncoding('utf8');

    response.on('data', function(data) {
      bufferedData += '+--------------------+' + data + '+--------------------+';
      console.log(bufferedData);
    });

    response.on('end', function() {
      console.log('End of data stream...');
    });
  });
}

getAndPrintHTML();
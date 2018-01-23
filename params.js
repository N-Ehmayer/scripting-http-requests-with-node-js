var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var https = require('https');

  https.get(options, function(response) {
    response.setEncoding('utf8');
    var bufferedData = '';

    response.on('data', function(data) {
      bufferedData += '+--------------------+' + data + '+--------------------+';
      console.log(bufferedData);
    });

    response.on('end', function() {
      console.log('End of data stream...');
    });
  });

}


getAndPrintHTML(requestOptions);
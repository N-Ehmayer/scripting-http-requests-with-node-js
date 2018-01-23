function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function(response) {
    var bufferedData = '';
    response.setEncoding('utf8');

    response.on('data', function(data) {
      bufferedData += '+--------------------+' + data + '+--------------------+';
    });

    response.on('end', function() {
      callback(bufferedData);
      console.log('End of data stream...');
    });
  });

}
  function printHTML (html) {
    console.log(html);
  }


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

module.exports = {getHTML: getHTML, printHTML: printHTML};


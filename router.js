/*

*/

var host = process.env.VCAP_APP_HOST || 'localhost';

var port = process.env.VCAP_APP_PORT || 3000;

var http = require("http");

var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;

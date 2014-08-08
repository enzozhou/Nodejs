var http = require("http");
var url = require("url");

var host = process.env.VCAP_APP_HOST || 'localhost';

var port = process.env.VCAP_APP_PORT || 3000

function start(route, handle){
	function OnRequest(request, response){
		var pathname = url.parse(request.url).pathname;		
		console.log("Request for " + pathname + " received.");
		
		//console.log("Request reveived.");
		response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname)
    response.write(content);
    response.end();		
		
		//response.write(request.url);		
	}
	http.createServer(OnRequest).listen(port);
	console.log("Server has started.")
}
exports.start = start;

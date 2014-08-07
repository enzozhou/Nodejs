var http = require("http");
var url = require("url");

function start(route){
	function OnRequest(request, response){
		var pathname = url.parse(request.url).pathname;		
		console.log("Request for " + pathname + " received.");
		route(pathname);
		//console.log("Request reveived.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello Enzo\n");
		response.write("Hello Enzo\n");
		// for(var i=0;i<100;i++){
		// response.write("Hello Enzo\n");
			// response.write(i);
			// if(i%2 > 0){
				// response.write("<br />");
			// }
		// }
		response.write(request.url);
		response.end();
	}
	http.createServer(OnRequest).listen(1377);
	console.log("Server has started.")
}
exports.start = start;

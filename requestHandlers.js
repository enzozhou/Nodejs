var exec = require("child_process").exec;

function start(){
  console.log("Request handler 'start' was called.");
  //function sleep(milliSeconds){
  //  var startTime = new Date().getTime();
  //  while (new Date().getTime() < startTime + milliSeconds);
  //}
  var content = "empty";

  exec("ls -lah",{timeout: 10000, maxBuffer: 20000*1024}, function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.wtite(stdout);
    response.end();
  });
  
  //sleep(10000);
}

function upload(){
  console.log("Request handler 'Upload' was called.");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Hello upload");
}

exports.start = start;
exports.upload = upload;

var http=require("http");

console.log("Server listening on port no 8000");

http.createServer(function(req,res){
	
	 res.end("Hello node!");


}).listen(8000);

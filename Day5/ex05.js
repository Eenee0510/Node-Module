const obj = {
  name: "Eenee",
  gender: "female",
};
var http = require("http");
var queryString = require("querystring");
var fs = require("fs");
const jsonObj = JSON.stringify(obj);
http
  .createServer((request, response) => {
    if (request.url.match(/^\/data/)) {
      const value = request.url.split("=");
      response.writeHead(200, { "Content-Type": "text/html" });
      if (value[1] == "html") {
        fs.readFile("ex03.html");
      } else if (value[1] == "jpeg") {
        response.writeHead(200, { "Content-Type": "image/jpeg" });
        fs.readFile("any.jpeg");
      } else if (value[1] == "json") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(jsonObj);
      }
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
      response.end();
    }
    response.end();
  })
  .listen(3000);
console.log("Server is starting at 3000");

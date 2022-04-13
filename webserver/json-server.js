var http = require("http");
const obj = {
  name: "Eenee",
  job: "Student",
};

var jsonObj = JSON.stringify(obj);
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-type": "application-json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(jsonObj);
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");

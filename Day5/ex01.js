let http = require("http");
let fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("any.jpeg", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("success");
        response.end(data);
      }
    });
  })
  .listen(3000);

console.log("server is started at localhost:3000");

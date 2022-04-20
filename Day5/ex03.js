let http = require("http");
let fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("ex03.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("success");
        response.end(data);
      }
    });
  })
  .listen(3002);
console.log("The server is started localhost:3002");

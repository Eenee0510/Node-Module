let http = require("http");
let fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    if (request.url === "/html") {
      fs.readFile("ex03.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          console.log("success");
          response.end(data);
        }
      });
    } else if (request.url === "/jpeg") {
      fs.readFile("any.jpeg", (error, data) => {
        if (error) {
          throw error;
        } else {
          console.log("success");
          response.end(data);
        }
      });
    }
  })
  .listen(3000);
console.log("Ex04 running on localhost:3000");

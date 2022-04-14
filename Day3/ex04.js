var http = require("http");
const obj = {
  success: false,
  Data: [
    {
      name: "Eenee",
      age: "34",
    },
    {
      name: "Bat",
      age: "25",
    },
  ],
};

var jsonObj = JSON.stringify(obj);

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.end(jsonObj);
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");

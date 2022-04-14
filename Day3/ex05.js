var http = require("http");
const obj = {
  Data: [
    {
      name: "Hatnaa",
      age: 20,
      gender: "male",
      status: "student",
    },
    {
      name: "Eenee",
      age: 25,
      gender: "female",
      status: "student",
    },
  ],
};

const jsonObj = JSON.stringify(obj);
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
  .listen(3000);
console.log("Server running at http://localhost:3000");

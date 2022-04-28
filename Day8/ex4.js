const request = require("request");
const http = require("http");
const fse = require("fs-extra");

http
  .createServer(function(req, res) {
    if (req.url === "/ghibli=films") {
      request(
        "https://ghibliapi.herokuapp.com/films",
        (error, response, body) => {
          if (error) console.log(error);
          console.log(response.statusCode);
          console.log(body);
        }
      );
    }
  })
  .listen(3000);

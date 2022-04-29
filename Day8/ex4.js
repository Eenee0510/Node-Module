const request = require("request");
const http = require("http");
const fse = require("fs-extra");

http
  .createServer(function(req, res) {
    if (req.url === "/ghibli=films") {
      request(
        "https://ghibliapi.herokuapp.com/films",
        (error, response, body) => {
          if (response) {
            const films = JSON.parse(body);
            //  console.log(films);
            let filmData = "";
            films.map((e) => {
              filmData =
                filmData +
                `["title": ${e.title},
       "image": ${e.image},
       "species": ${e.species[]},
       ]`;
            });
            fse.writeJson(
              "films04.json",
              filmData,
              { name: "fs-extra" },
              (err) => {
                if (err) return console.error(err);
                console.log("success!");
              }
            );
          }
        }
      );
    }
  })
  .listen(3000);

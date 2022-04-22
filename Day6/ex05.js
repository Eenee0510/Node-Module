var https = require("https");
var http = require("http");

http
  .createServer((req, res) => {
    if (req.url.match(/^\/ghibli/)) {
      if (req.url.split("=")[1] === "people") {
        const result = getPeople();
        result.then((data) => buildAndGetImages(data));
        res.end();
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Not Found");
      res.end();
    }
  })
  .listen(3000);

async function getPeople() {
  const url = "https://ghibliapi.herokuapp.com/people";
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = [];
      response.on("data", (chunk) => {
        data.push(chunk);
      });
      response.on("error", () => {
        reject("hey something went wrong");
      });

      response.on("end", () => {
        resolve(data);
      });
    });
  });
}

async function buildAndGetImages(data) {
  const films = JSON.parse(Buffer.concat(data).toString());
  let peopleData = "";
  let promises = [];
  films.map(async (e, peopleData) => {
    promises.push(getImages(e, peopleData));
  });
  Promise.all(promises).then((values) => console.log(values));
}

async function getImages(e, peopleData) {
  return new Promise((resolve, reject) => {
    https.get(e.films[0], (response) => {
      let data = [];
      let images = [];
      response.on("data", (chunk) => {
        data.push(chunk);
      });
      response.on("end", () => {
        const film = JSON.parse(Buffer.concat(data).toString());
        filmImage = film.image;
        images.push(filmImage);
        peopleData =
          peopleData +
          `
                                    <tr>
                                      <td>${e.name}</td>
                                      <td>${e.gender}</td>
                                      <td>${e.age}</td>
                                      <td>${filmImage}</td>
                                    </tr>`;
        resolve(peopleData);
      });
    });
  });
}

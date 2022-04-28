const request = require("request");

const myPromise = new Promise((resolve, reject) => {
  request("https://ghibiapi.herokuapp.com/films", function(
    error,
    response,
    body
  ) {
    //console.log(response);
    if (response) {
      resolve(response.statusCode);
    } else {
      reject(error);
    }
  });
});
function printFilms(str) {
  console.log(str);
  return myPromise;
}

module.exports = printFilms;

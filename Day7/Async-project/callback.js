const printFilms = require("./app");

function printAllCallback() {
  printFilms("A", () => {
    printFilms("B", () => {
      printFilms("C", () => {});
    });
  });
}
printAllCallback();

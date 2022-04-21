const path = require("path");
const { dirname } = require("path/posix");

const notes = "/Users/mstars_lab2_01/Desktop/Node-Module/Day6/folder-read.js";
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));

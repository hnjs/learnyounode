var fs = require("fs");
var fileContents = fs.readFileSync(process.argv[2], "utf8");
console.log(fileContents.split("\n").length-1);
var fs = require("fs");
var filename = process.argv[2];

// Approach using readFile - whole file is read

// fs.readFile(filename, {encoding:"utf8"}, function(error, data) {
// 	if (error) {
// 		console.error(error.message);
// 	} else {
// 		console.log(data.split("\n").length - 1);
// 	}
// });

// Approach using streams - chunks of varying sizes of file are read

var readStream = fs.createReadStream(filename, {encoding: "utf8"});
var fileContents = "";

readStream.on("data", function(chunk) {
	fileContents += chunk;
}).on("end", function() {
	console.log(fileContents.split("\n").length - 1);
});
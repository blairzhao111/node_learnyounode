var fs = require('fs');

//fs.createReadStream takes a file as an argument and returns a readable stream object
//var stream = fs.createReadStream("given file");
//you can call .pipe() on the stream, here we pipe data to the process.stdout
fs.createReadStream(process.argv[2]).pipe(process.stdout);
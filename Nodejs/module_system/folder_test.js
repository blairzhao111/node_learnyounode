
//folder_module is a directory having the same parent dirctory as this folder_test.js file.
//in folder_module directory, there is a JSON file named package.json containes information that helps npm to local main file.

var folder = require('./folder_module');

folder.print();
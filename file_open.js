var fs = require('fs');

//Asynchronous file open
console.log('going to open file:');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        console.error(err);
    }
    console.log('File opened successfully !');
});

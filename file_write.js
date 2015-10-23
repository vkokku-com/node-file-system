var fs = require('fs');

//Asynchronous file write
console.log('going to write some content in a file');

fs.writeFile('input.txt', 'new content is added in order to check file write method implementation', function(err) {
    if (err) {
        console.error(err);
    }
    console.log('Data written successfully');
    console.log("Let's read the newly written data");
    fs.readFile('input.txt', function(err, data) {
        if (err) {
            console.error(err);
        }
        console.log('new content:' + ' ' + data.toString());
    });
});

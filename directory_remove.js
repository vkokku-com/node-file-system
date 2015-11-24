var fs = require('fs');

console.log('going to delete the directory /tmp/test');

fs.rmdir('/tmp/test', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('going to read the directory');
    fs.readdir('/tmp/', function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            console.log(file);
        });
    });

});

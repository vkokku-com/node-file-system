var fs = require('fs');

console.log('going to read directory /Appraisal');

fs.readdir('/Appraisal', function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});

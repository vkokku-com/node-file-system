var fs = require('fs');
console.log('going to create a directory /tmp/test');

fs.mkdir('/tmp/test', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('directory created successfully');
});

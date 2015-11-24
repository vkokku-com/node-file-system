// reading content from a file using file descriptor
var fs = require('fs');
var buf = new Buffer(1024);

console.log('going to open an existing file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('file opened successsfully');
    console.log('going to read the file');
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + ' ' + 'bytes read');
        //print read only files to avoid junk
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });

});

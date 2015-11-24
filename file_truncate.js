var fs = require('fs');
var buf = new Buffer(1024);

console.log('Going to open an existing file');
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        console.error(err);

    }
    console.log('File opened successfully');
    console.log('Going to truncate the file after 10 bytes');
    // truncate the opened file
    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('going to read the truncated file');
        fs.read(fd, buf, 0, buf.length, function(err, bytes) {
            if (err) {
                console.log(err);
            }
            console.log(bytes + ' ' + 'bytes read');
            //print only the read only bytes to avoid junk
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log('file closed successfully');
            });
        });

    });
});

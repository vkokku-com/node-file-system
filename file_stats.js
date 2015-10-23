var fs = require('fs');

console.log('file information');

fs.stat('input.txt', function(err, stats) {
    if (err) {
        console.error(err);
    }
    console.log(stats);
    console.log('got file info successfully');
    console.log('isFile ?' + ' ' + stats.isFile());
    console.log('isDirectory ?' + ' ' + stats.isDirectory());
    console.log('isBlockDevice ?' + ' ' + stats.isBlockDevice());
    console.log('isCharacterDevice ?' + ' ' + stats.isCharacterDevice());
    console.log('isSymbolicLink ?' + ' ' + stats.isSymbolicLink());
    console.log('isFIFO ?' + ' ' + stats.isFIFO());
    console.log('isSocket ?' + ' ' + stats.isSocket());
});

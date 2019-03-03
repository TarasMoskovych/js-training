const fs = require('fs');

const proxyFs = (function() {
    return {
        readFile(path, format, callback) {
            if (!path.match(/.md$|.MD$/)) {
                return callback(new Error(`Can only read .md files.`));
            }

            fs.readFile(path, format, callback);
        }
    }
})();

proxyFs.readFile('text.md', 'utf-8', (error, file) => {
    if (error) return console.error(error);

    console.log(file);
});

proxyFs.readFile('text.txt', 'utf-8', (error, file) => {
    if (error) return console.error(error);

    console.log(file);
});
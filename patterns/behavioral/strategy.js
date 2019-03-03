const fs = require('fs');

class Logger {
    constructor() {
        this.strategy = null;
    }

    log(value) {
        if (this.strategy) {
            return this.strategy.execute(value);
        }
    }
}

class FileStrategy {
    constructor(filename) {
        this.filename = filename;
    }

    execute(value) {
        fs.appendFileSync(this.filename, value);
    }
}

class ConsoleStrategy {
    execute(value) {
        console.log(value);
    }
}

function createStrategy(type, filename) {
    switch (type) {
        case 'console': return new ConsoleStrategy();
        case 'file': return new FileStrategy(`${filename}.txt`);
    }
}

const logger = new Logger();
logger.strategy = createStrategy('file', 'log');
logger.log('Test log');

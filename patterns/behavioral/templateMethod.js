const datastore = {
    process() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};

function inherit(proto) {
    const F = function() { };
    F.prototype = proto;
    return new F();
}

const log = (function() {
    var log = '';

    return {
        add(msg) {
            log += msg + '\n';
        },
        show() {
            console.log(log); log = '';
        }
    }
})();

const mySql = inherit(datastore);

mySql.connect = function() {
    log.add('MySQL: connect step');
};

mySql.select = function() {
    log.add('MySQL: select step');
};

mySql.disconnect = function() {
    log.add('MySQL: disconnect step');
};

mySql.process();
log.show();

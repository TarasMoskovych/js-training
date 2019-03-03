function User(name) {
    this.name = name;

    this.say = function() {
        log.add('User: ' + this.name);
    };
}

function DecoratedUser(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function() {
        log.add('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
    };
}

const log = (function() {
    let log = '';

    return {
        add: function(msg) {
            log += msg + '\n';
        },
        show: function() {
            console.log(log);
            log = '';
        }
    }
})();

const user = new User('Kelly');
user.say();
log.show();

const decorated = new DecoratedUser(user, 'Broadway', 'New York');
decorated.say();
log.show();

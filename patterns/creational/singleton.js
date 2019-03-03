function Singleton() {
    const instance = Singleton.instance;

    if (instance) {
        return instance;
    }

    Singleton.instance = this;
}

const s1 = new Singleton();
console.log(s1 === new Singleton());

const Singleton2 = (function() {
    let instance;

    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    return {
        getInstance: function(name, age) {
            if (!instance) {
                instance = new User(name, age);
            }

            return instance;
        }
    }
})();

const user1 = Singleton2.getInstance('User1', 1);
const user2 = Singleton2.getInstance('User2', 2);

console.log(user1 === user2);

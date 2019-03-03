class Chat {
    constructor() {
        this.users = [];
        this.publish = this.publish.bind(this);
    }

    subscribe(user) {
        user.onMessage = this.publish;
        this.users.push(user);
    }

    publish(origin, message) {
        for (let user of this.users) {
            if (origin !== user) {
                user.receive(origin, message);
            }
        }
    }
}

class User {
    constructor(name, chat) {
        this.name = name;
        this.chat = chat;
    }

    say(message) {
        this.chat.publish(this, message);
    }

    receive(user, message) {
        console.log(`${user.name}: ${message}`);
    }
}

const chat = new Chat();

const user1 = new User('User 1', chat);
const user2 = new User('User 2', chat);
const user3 = new User('User 3', chat);

chat.subscribe(user1);
chat.subscribe(user2);
chat.subscribe(user3);

user1.say('Hello');
user2.say('Hey!');
user3.say('How are you?');

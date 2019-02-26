console.log('Objects');

// Task 01
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
console.log('Task 1');

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;
}

Tune.prototype.concat = function () {
    return [].concat(this.title, this.artist);
};

const tune1 = new Tune('Tune1', 'Artist1');
console.log(tune1.concat());

const tune2 = new Tune('Tune2', 'Artist2');
console.log(tune2.concat());

console.log('\n');

// Task 02
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().
console.log('Task 2');

function Tune2(title, artist) {
    let _title = title;
    let _artist = artist;

    this.title = function(newTitle) {
        if (!newTitle) {
            return _title;
        }

        _title = newTitle;
    }

    this.artist = function(newArtist) {
        if (!newArtist) {
            return _artist;
        }

        _artist = newArtist;
    }
}

Tune2.prototype.concat = function () {
    return [].concat(this.title(), this.artist());
};

const tune3 = new Tune2('Tune3', 'Artist3');
tune3.title('Tune3 Custom');
console.log(tune3.title());
console.log(tune3.concat());

const tune4 = new Tune2('Tune3', 'Artist3');
tune4.artist('Artist3 Custom');
console.log(tune4.artist());
console.log(tune4.concat());

console.log('\n');

// Task 03
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.
console.log('Task 3');

if (!String.prototype.exclaim) {
    String.prototype.exclaim = function () {
        console.log(`${this}!`);
    };
}

'str'.exclaim();
console.log('\n');

// Task 04
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class
console.log('Task 4');

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getTitle = function() {
    return this.title;
};

Book.prototype.getAuthor = function() {
    return this.author;
};

function TechBook(title, author, category) {
    Book.call(this, title, author, category);
    this.category = category;
}

TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;

TechBook.prototype.getBook = function() {
    return `Title: ${this.title}, author: ${this.author}, category: ${this.category}`;
};

TechBook.prototype.getCategory = function() {
    return this.category;
};

const book = new Book('Book', 'Author');
console.log(book);
console.log(book.getAuthor());

const techBook = new TechBook('TechBook', 'Author2', 'Category');
console.log(techBook);
console.log(techBook.getAuthor());
console.log(techBook.getCategory());
console.log(techBook.getBook());

console.log('\n');

class Book2  {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }
}

class TechBook2 extends Book2 {
    constructor(title, author, category) {
        super(title, author);
        this.category = category;
    }

    getBook() {
        return `Title: ${this.title}, author: ${this.author}, category: ${this.category}`;
    }

    getCategory() {
        return this.category;
    }
}

const book2 = new Book2('Book2', 'Author');
console.log(book2);
console.log(book2.getAuthor());

const techBook2 = new TechBook2('TechBook2', 'Author2', 'Category');
console.log(techBook2);
console.log(techBook2.getAuthor());
console.log(techBook2.getCategory());
console.log(techBook2.getBook());

console.log('\n');

// Task 05
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.
console.log('Task 5');

function Shape() {
    Shape.count++;
}

Shape.count = 0;
Shape.getCount = function() {
    return this.count;
}

function Rectangle(a, b) {
    Shape.call(this);

    this.a = a;
    this.b = b;
    this.square = function() {
        return this.a * this.b;
    }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const r = new Rectangle(10, 15);
console.log(r.square());
console.log(Shape.getCount());

const r2 = new Rectangle(5, 2);
console.log(r2.square());
console.log(Shape.getCount());

console.log('\n');

class Shape2 {
    static getCount() {
        return this.count;
    }

    constructor() {
        Shape2.count++;
    }
}

Shape2.count = 0;

class Rectangle2 extends Shape2 {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    square() {
        return this.a * this.b;
    }
}

const r3 = new Rectangle2(10, 15);
console.log(r3.square());
console.log(Shape2.getCount());

const r4 = new Rectangle2(5, 2);
console.log(r4.square());
console.log(Shape2.getCount());

console.log('\n');

// Task 06
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)
console.log('Task 6');

function Person() {
    this.firstName = '';
    this.lastName = '';
}

Person.prototype.setFirstName = function(name) {
    this.firstName = name;
    return this;
};

Person.prototype.setLastName = function(name) {
    this.lastName = name;
    return this;
};

const p = new Person();
console.log(p);
p.setFirstName('a').setLastName('b').setFirstName('aa').setLastName('bb');
console.log(p);

console.log('\n');

// Task 07
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.
console.log('Task 7');

const data = {};
Object.defineProperties(data, {
    id: {
        value: 1,
        writable: true
    },
    type: {
        value: 'primary',
        enumerable: true
    },
    category: {
        get: function() {
            return this._category;
        },
        set: function(val) {
            this._category = val;
        },
    },
    _category: {
        configurable: true,
        enumerable: true,
        writable: true
    }
});

for (let i in data) {
    console.log(i);
}

console.log(data);

console.log('\n');

// Task 08
// EN: Create object literal with two properties. Deny extend the object.
console.log('Task 8');

const obj = { id: 10, name: 'Test' };
Object.preventExtensions(obj);
obj.newProp = 'someValue';
console.log(obj);

console.log('\n');

// Task 09 TodoList Application
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.
console.log('Task 8');

function Task(name, isDone) {
    this.name = name;
    this.isDone = isDone || 'new';
}

function TaskList() {
    this.tasks = [];

    this.addTask = function(task) {
        this.tasks.push(task);
    }

    this.getTasks = function() {
        if (this.tasks.length === 0) {
            console.log('tasks list is empty');
            return;
        }

        for (let task of this.tasks) {
            console.log(`[${task.isDone}] ${task.name}`);
        }
    }

    this.completeTask = function(task) {
        task.isDone = 'completed';
    }

    this.removeTask = function(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    this.sortTasks = function() {
        this.tasks.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
    }

    this.removeTasks = function() {
        this.tasks.length = 0;
    }

    this.getTasksLenth = function() {
        return this.tasks.length;
    }
}

const taskList = new TaskList();
const t1 = new Task('task 3');
const t2 = new Task('task 2');
const t3 = new Task('a_task 1');
const t4 = new Task('b_task 4');

taskList.addTask(t1);
taskList.addTask(t2);
taskList.addTask(t3);
taskList.getTasks();

console.log('\n');

taskList.removeTask(t2);
taskList.getTasks();

console.log('\n');

taskList.completeTask(t1);
taskList.getTasks();
taskList.sortTasks();

console.log('\n');

taskList.addTask(t4);
taskList.getTasks();

console.log('\n');

taskList.removeTask(t4);
taskList.getTasks();

console.log('\n');

taskList.removeTasks();
taskList.getTasks();

console.log('\n');

// Polyfills
Object.assign2 = function(target) {
    const args = Array.prototype.slice.call(arguments);

    for (let sources of args.slice(1)) {
        for (let prop in sources) {
            target[prop] = sources[prop];
        }
    }

    return target;
}

const o = { a: 1 };
const copy = Object.assign({}, o);
console.log(copy);  // output { a: 1 }
o.a = 100;
console.log(copy);  // output { a: 1 }

const oTest = { a: 1 };
const copyTest = Object.assign({}, oTest);
console.log(copyTest);  // output { a: 1 }
oTest.a = 100;
console.log(copyTest);  // output { a: 1 }

console.log('\n');

let objTest = { a: 0 , b: { c: 0}};
let objTest2 = Object.assign({}, objTest);
console.log(JSON.stringify(objTest2));  // output { a: 0, b: { c: 0}}

objTest.a = 1;
console.log(JSON.stringify(objTest));  // output { a: 1, b: { c: 0}}
console.log(JSON.stringify(objTest2));  // output { a: 0, b: { c: 0}}

objTest2.a = 2;
console.log(JSON.stringify(objTest));  // output { a: 1, b: { c: 0}}
console.log(JSON.stringify(objTest2));  // output { a: 2, b: { c: 0}}

objTest2.b.c = 3;
console.log(JSON.stringify(objTest));  // output { a: 1, b: { c: 3}}
console.log(JSON.stringify(objTest2));  // output { a: 2, b: { c: 3}}

console.log('\n');

let objTest11 = { a: 0 , b: { c: 0}};
let objTest22 = Object.assign2({}, objTest11);
console.log(JSON.stringify(objTest22));  // output { a: 0, b: { c: 0}}

objTest11.a = 1;
console.log(JSON.stringify(objTest11));  // output { a: 1, b: { c: 0}}
console.log(JSON.stringify(objTest22));  // output { a: 0, b: { c: 0}}

objTest22.a = 2;
console.log(JSON.stringify(objTest11));  // output { a: 1, b: { c: 0}}
console.log(JSON.stringify(objTest22));  // output { a: 2, b: { c: 0}}

objTest22.b.c = 3;
console.log(JSON.stringify(objTest11));  // output { a: 1, b: { c: 3}}
console.log(JSON.stringify(objTest22));  // output { a: 2, b: { c: 3}}

console.log('\n');

const o111 = { a: 1 };
const o222 = { b: 2 };
const o333 = { c: 3 };
const obj111 = Object.assign(o111, o222, o333);
console.log(obj111);  // output { a: 1, b: 2, c: 3 }
console.log(o111);   // output { a: 1, b: 2, c: 3 }

console.log('\n');

const o111Test = { a: 1 };
const o222Test = { b: 2 };
const o333Test = { c: 3 };
const obj111Test = Object.assign2(o111Test, o222Test, o333Test);
console.log(obj111Test);  // output { a: 1, b: 2, c: 3 }
console.log(o111Test);   // output { a: 1, b: 2, c: 3 }

console.log('\n');

const z1 = { a: 1, b: 1, c: 1 };
const z2 = { b: 2, c: 2 };
const z3 = { c: 3 };
const z = Object.assign({}, z1, z2, z3);
console.log(z);  // output { a: 1, b: 2, c: 3 }

const z1Test = { a: 1, b: 1, c: 1 };
const z2Test = { b: 2, c: 2 };
const z3Test = { c: 3 };
const zTest = Object.assign2({}, z1Test, z2Test, z3Test);
console.log(zTest);  // output { a: 1, b: 2, c: 3 }

console.log('\n');

// Pokemon practice
function Charmander(info) {
    this.height = info.height;
    this.weight = info.weight;

    this._type = 'Fire';
    this._specie = 'Lizard Pokémon';
    this._canWalk = true;
    this._canFly = false;
}

Charmander.prototype.getType = function() {
    return this._type;
};

Charmander.prototype.getSpecie = function() {
    return this._specie;
};

Charmander.prototype.canWalk = function() {
    return this._canWalk;
};

Charmander.prototype.canFly = function() {
    return this._canFly;
};

Charmander.prototype.getHeight = function() {
    return this.height;
};

Charmander.prototype.getWeight = function() {
    return this.weight;
};

function Charmeleon(info) {
    Charmander.call(this, info);

    this._specie = 'Flame Pokémon';
}

Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard(info) {
    Charmander.call(this, info);

    this._specie = 'Flame Pokémon';
    this._canFly = true;
}

Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;

const embury = new Charmander({ height: 1, weight: 15 });
const mercury = new Charmeleon({ height: 2, weight: 45 });
const morderbrand = new Charizard({ height: 10, weight: 200 });

console.log(embury);
console.log(mercury);
console.log(morderbrand);

console.log('\n');

console.log(embury.getType());                             // -> “Fire”
console.log(embury.getType() === mercury.getType());       // -> true
console.log(mercury.getType() === morderbrand.getType());  // -> true

console.log('\n');

console.log(embury.getSpecie());                              // -> “Lizard Pokémon”
console.log(mercury.getSpecie());                             // -> “Flame Pokémon”
console.log(morderbrand.getSpecie() === mercury.getSpecie()); // -> true

console.log('\n');

console.log(embury.getHeight());  // -> 1
console.log(morderbrand.canWalk()); // -> true

console.log('\n');

console.log(embury.canFly());                      // -> false
console.log(mercury.canFly());                     // -> false
console.log(embury.canFly() === mercury.canFly()); // -> true
console.log(morderbrand.canFly());                 // -> true

console.log('\n');

// 1) Create constructor Player for playing content it should provide next public interface:
//     - play
//     - stop
//     - info
// 2) Create constructor VideoPlayer that inherited Player
// it must override info method from parent to have possibility add specific info
function Player(data) {
    this.data = data;
}

Player.prototype.play = function() {
    console.log(`${this.data} is playing`);
}

Player.prototype.stop = function() {
    console.log(`${this.data} is stopped`);
}

Player.prototype.info = function() {
    console.log(`${this.constructor.name}: ${this.data} `);
}

function MediaPlayer(data) {
    Player.call(this, data);
}

MediaPlayer.prototype = Object.create(Player.prototype);
MediaPlayer.prototype.constructor = MediaPlayer;

MediaPlayer.prototype.info = function() {
    console.log('Media Player info method');
    Player.prototype.info.apply(this, arguments);
}

const player = new Player('video.mp4');
player.play();
player.stop();
player.info();

console.log('\n');

const mediaPlayer = new MediaPlayer('video2.mp4');
mediaPlayer.play();
mediaPlayer.stop();
mediaPlayer.info();

console.log('\n');

/*
1) Assign __proto__ references to objects
2) Assign __proto__ using Object.setPrototypeOf(object, prototype);
    so that any search for something goes according to the algorithm jully -> robbert -> utaka -> john.
    use Object.getPrototypeOf(object) for check
*/

const john = {
    phone: 'john\'s nokia'
};

const utaka = {
    dog: 'Utaka\'s dog'
};

const robbert = {
    meat: 'meat',
    beer: '10l'
};

const jully = {
    money: 2000
};

Object.setPrototypeOf(jully, robbert);
Object.setPrototypeOf(robbert, utaka);
Object.setPrototypeOf(utaka, john);

console.log(jully.dog === 'Utaka\'s dog');
console.log(robbert.phone === 'john\'s nokia');
console.log(john.beer === undefined);

console.log('\n');

/*
    Create new constructor ArrayPro that extends Array.prototype
    1) Add posibility to lock and unlock change operation like (push, pop, ...)
    2) Add posibility to add/remove callback for next operation (push, pop, ....)
        function addCallBack(operation, callback); operation can be ('*' - all, 'pop', 'push');
        function removeCallBack();
        function callback(item, operation);
*/
function ArrayPro() {
    Array.call(this);

    this._isLocked = false;
    this._callback = null;
}

ArrayPro.prototype = Object.create(Array.prototype);
ArrayPro.prototype.constructor = ArrayPro;

ArrayPro.prototype.addCallback = function(operation, callback) {
    this._callback = { operation, callback };
}

ArrayPro.prototype.removeCallback = function() {
    this._callback = null;
}

ArrayPro.prototype.getOperation = function() {
    console.log(this._callback.operation);
    return this._callback.operation;
}

ArrayPro.prototype.checkAll = function() {
    return this._callback !== null;
}

ArrayPro.prototype.checkTypes = function(type) {
    return this._callback.operation === '*' ||
           this._callback.operation === 'all' ||
           this._callback.operation === type;
}

ArrayPro.prototype.checkPush = function() {
    if (!this.checkAll()) return;
    return this.checkTypes('push');
}

ArrayPro.prototype.checkPop = function() {
    if (!this.checkAll()) return false;
    return this.checkTypes('pop');
}

ArrayPro.prototype.lock = function() {
    this._isLocked = true;
}

ArrayPro.prototype.unlock = function() {
    this._isLocked = false;
}

ArrayPro.prototype.push = function(data) {
    if (this.checkPush()) {
        this._callback.callback(data, this._callback.operation);
    }
    if (!this._isLocked) {
        Array.prototype.push.call(this, data);
    } else {
        console.log('Cannot execute push');
    }
    return this;
}

ArrayPro.prototype.pop = function(data) {
    if (this.checkPop()) {
        this._callback.callback(data, this._callback.operation);
    }
    if (!this._isLocked) {
        Array.prototype.pop.call(this, data);
    } else {
        console.log('Cannot execute pop');
    }
    return this;
}

const pro = new ArrayPro();

pro.addCallback('*', function(item, operation) {
    console.log(`Operation ${operation} called with item ${item}`);
});

pro.push(2);
pro.push(4);
console.log(pro);
pro.lock();
pro.push(2);
console.log(pro);
pro.unlock();
pro.pop();
console.log(pro);
pro.removeCallback();
pro.push(7);
pro.push(8);
console.log(pro);

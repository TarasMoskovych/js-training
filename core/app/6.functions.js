console.log('Functions');

// Task 1. FDS
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
console.log('Task 1');

console.log(conc(1, 1));
console.log(conc('1', '1'));

function conc(a, b) {
    return String(a).concat(b);
}
console.log('\n');

// Task 2. FDE
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     UseFunction Definition Expression (FDE).
//     Call a function after it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
console.log('Task 2');

const comp = function(a, b) {
    return a === b ? 1 : -1;
}

console.log(comp('abc', 'abc'));
console.log(comp('abC', 'abc'));
console.log('\n');

// Task 3. AF
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.
console.log('Task 3');

document.querySelector('#btn-create-promise').addEventListener('click', function() {
    console.log('message in console');
});
console.log('\n');

// Task 4. NFE
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).
console.log('Task 4');

const fibo = function fiboInner(num) {
    let a = 1;
    let b = 1;
    let current;

    for (let i = 0; i < num; i++) {
        current = b;
        b = a;
        a = a + current;
        console.log(current);
    }
}

fibo(20);

console.log('\n');

const fibo2 = function fiboInner(num) {
    return num <= 1 ? num : fiboInner(num - 1) + fiboInner(num - 2);
}

console.log(fibo2(13));
console.log('\n');

const factorial = function factorialInner(num) {
    let res = 1;

    for (let i = 1; i <= num; i++) {
        res = res * i;
    }

    return res;
}

console.log(factorial(10));

const factorial2 = function factorialInner(num) {
    return num > 1 ? num * factorialInner(num - 1) : 1;
}

console.log(factorial2(5));
console.log('\n');

// Task 5. FC
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.
console.log('Task 5');

const params = 'a, b';
const body = `return function(b) { return a + b }`;
const sum = new Function(params, body);
const test = sum(5);
console.log(test(15));
console.log('\n');

// Task 6. ArF
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.
console.log('Task 6');

const arr = [1, 8, 3, 5, 12, 7, 9, 11];
console.log(arr);
const arr2 = arr.map(item => item * item).filter(item => item < 100).sort((a, b) => a - b);
console.log(arr2);
console.log('\n');

// Task 7. IIFE
// EN: Create a construction which allows to run the above function conc.
console.log('Task 7');

(function() {
    console.log(conc('1', '1'));
})();
console.log('\n');

// Task 8. Arguments Object, Rest
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
console.log('Task 8');

function parts() {
    const args = Array.prototype.slice.call(arguments);
    const newArr = [];

    for (let i = 0; i < args.length; i++) {
        newArr.push(args[i].slice(args[i].indexOf(':') + 1, args[i].lastIndexOf('.')).trim());
    }

    return newArr;
}
console.log(parts('This is the first sentence. This is a sentence with a list of items:' +
      'cherries, oranges, apples, bananas.', 'This is the second sentence.' +
      'This is a sentence with a list of items: red, blue, yellow, black.'));
console.log('\n');

// Task 9. Optional Arguments
// EN: Create a function find(testString, test), which should return the position
//     of test string within testString.
//     If the second parameter is omitted, use default value test = testString.
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
//     testString = 'abc', test='a', test2='z', result = -1
console.log('Task 9');

const find = function(testString, test) {
    const res = [];
    const args = Array.prototype.slice.call(arguments, 1);
    test = test || testString;

    if (args.length <= 1) {
        return testString.indexOf(test);
    }

    for (let i = 0; i < args.length; i++) {
        res.push(testString.indexOf(args[i]));
    }

    return res.some(v => v === -1) ? -1 : res[0];
}

console.log(find('abc', 'b'));
console.log(find('abc'));
console.log(find('abc', 'd'));
console.log(find('abc', 'a', 'b'));
console.log(find('abc', 'a', 'z'));
console.log('\n');

// Task 10. Function as an Object
// EN: Create a function str(), which takes one string parameter and display in the console
//     string 'String is non empty' if the paramer is not empty string, otherwise it
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
console.log('Task 10');

function str(s) {
    str.isNonEmptyStr(s) ? console.log('String is non empty') : console.log('String is empty');
}

str.isNonEmptyStr = function(s) {
    return s ? String(s).trim() !== '' : false;
};

console.log(str.isNonEmptyStr());    //result = false
console.log(str.isNonEmptyStr(''));  //result = false
console.log(str.isNonEmptyStr('a')); //result = true
console.log(str.isNonEmptyStr(1));   //result = false
str();                               //console.log('String is empty')
str('a');                            //console.log('String is non empty')

console.log('\n');

// Task 11. Function as a Parameter
// EN: Create a function toConsole with one parameter. The function should display
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']
console.log('Task 11');

function toConsole(param) {
    console.log(param);
}

function toAlert(param) {
    alert(param);
}

function splitToWords(msg, callback) {
    if (typeof callback !== 'function') {
        return msg.split(' ');
    }

    msg.split(' ').forEach(item => callback(item));
}

splitToWords('My very long text msg', toConsole);
// splitToWords('My very long text msg', toAlert);
console.log(splitToWords('My very long text msg'));

console.log('\n');

// Task 12. Function as a Result
// EN: Create a function copyright, which ahould return another function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.
console.log('Task 12');

function copyright() {
    return function(str) {
        return str + '\u00A9';
    }
}
console.log(copyright()('EPAM'));
console.log('\n');

// Task 13. Function as a Result
// EN: This task is similar to the previous one, but in this case the function copyright takes
//     one parameter - sign (© ('\u00A9')).
console.log('Task 13');

function copyright2(sign) {
    return function(str) {
        return str + sign;
    }
}
console.log(copyright2('\u00A9')('EPAM'));
console.log('\n');

// Task 14. Function as a Method
// EN: Create an object literal employee with the following properties:
//     name: 'Ann',
//     work – function, which display in the console the following string
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."
console.log('Task 14');

const employee = {
    name: 'Ann',
    work: function() {
        console.log(`I am ${this.name}. I am working...`);
    }
};
employee.work();
console.log('\n');

// Task 15. Borrow Method
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.
console.log('Task 15');

const person = {
    name: 'someName'
};

employee.work.call(person);
console.log('\n');

// Task 16. Memoization
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
console.log('Task 16');

const memo = fn => {
    let cache = {};

    return (...args) => {
        let n = args[0];

        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        } else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const fiboTest = memo(fibo2);

console.log(fiboTest(5));
console.log(fiboTest(5));
console.log('\n');

const factorialTest = memo(factorial);

console.log(factorialTest(5));
console.log(factorialTest(5));
console.log('\n');

// Polyfills
Function.prototype.bind2 = function(context) {
    if (typeof this !== 'function') throw Error('Should be a function');

    const args = Array.prototype.slice.call(arguments, 1);
    const toBind = this;

    return function() {
        toBind.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    }
};

Function.prototype.debounce = function(ms) {
    const _this = this;
    let timer = null;

    return function() {
        const args = Array.prototype.slice.call(arguments);

        function onComplete() {
            _this.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    }
}

function f(x) { alert(x) }
const debounced = f.debounce(1000);

debounced(1);
debounced(2);

setTimeout( function() { debounced(3) }, 1100);
setTimeout( function() { debounced(4) }, 1200);

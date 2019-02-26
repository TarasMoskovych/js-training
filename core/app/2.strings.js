console.log('Strings:');

// Task 01. padStart
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.
console.log('Task 1');

const hour = 4, minute = 35, second = 5;
const parser = (...args) => {
    let str = '';
    let arr = [];

    for (let a of args) {
        if ((a + '').length <= 1) {
           arr.push(`0${a}`);
        } else {
            arr.push(a);
        }
    }

    arr.forEach((item, index) => {
        if (arr.length - 1 !== index) {
            str += `${item}:`
            return;
        }
        str += `${item}`
    });

    return str;
};
console.log(parser(hour, minute, second));
console.log('\n');

// Task 02. repeat
// EN: Create a function which displays a 9 level pyramid in the console according to the
//     following pattern
//     1
//     22
//     333
//     4444
//     ...
console.log('Task 2');

let str2 = '';
for (let i = 1; i < 10; i++) {
    str2 = i + '';
    console.log(str2.repeat(i));
}
console.log('\n');

// Task 03. includes
// EN: Create a snippet of code which displays the value true in the console
//     when str contains 'viagra' or 'XXX', otherwise it displays false.
console.log('Task 3');

const str3 = 'XXX';
const searchWords = ['viagra', 'XXX'];
let flag = false;

searchWords.forEach(item => {
    if (str3.includes(item)) {
        flag = true;
        return;
    }
});

console.log(flag);
console.log('\n');

// Task 04. includes + index
// EN: Check whether the string contains a second occurrence of a substring,
//     return true / false.
console.log('Task 4');

const str4 = 'To be, or not, that is the question.';
console.log(str4.includes('To be', 1));
console.log('\n');

// Task 05. Template literal
// EN: Create s string "ten times two totally is 20"
//     using the following variables:
//     const a = 10;
//     const b = 2;
//     and template literal
console.log('Task 5');

const a5 = 10;
const b5 = 2;
console.log(`ten times two totally is ${a5 * b5}`)
console.log('\n');

// Task 06. normalize
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
console.log('Task 6');

const str61 = '\u006d\u0061\u00f1';
const str62 = '\u006d\u0061\u006e\u0303';
console.log(`${str61} === ${str62} ${str61 === str62}`)
console.log(`${str61} === ${str62} ${str61.normalize() === str62.normalize()}`)
console.log('\n');

// Task 07. endsWIth
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.
console.log('Task 7');

const files = ['file1', 'file2', 'file3'];
const endsWith = (arr, extension) => arr.map(item => `${item}.${extension}`);
console.log(endsWith(files, 'js'));
console.log('\n');

// Task 08. String.fromCodePoint
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 7800 - 8000.
console.log('Task 8');

const fromCodePoint = (min, max) => {
    for (let i = min; i <= max; i++) {
        console.log(`${String.fromCodePoint(i)} - ${i}`);
    }
};
fromCodePoint(7800, 8000);
console.log('\n');

// Task 09
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
console.log('Task 9');

const pyramid = (size, symbol = '#') => {
    let q = size - 1;
    let n = 1;
    let e = ' ';

    for (let i = 1; i <= size; i++) {
        console.log(e.repeat(q) + symbol.repeat(n));
        n += 2;
        q -= 1;
    }
};
pyramid(3);
pyramid(10, 'Z');
console.log('\n');

// Task 10
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.
console.log('Task 10');

const currency = num => console.log(`$${num.toFixed(2)}`);
currency(5);
currency(50.1);
currency(150.229598);
console.log('\n');

// Task 11
// Polyfills
String.prototype.includes2 = function(searchValue, position = 0) {
    return this.indexOf(searchValue, position) !== -1;
};

const str = 'To be, or not to be, that is the question.';

console.log(str.includes2('To be'));       // true
console.log(str.includes2('question'));    // true
console.log(str.includes2('nonexistent')); // false
console.log(str.includes2('To be', 1));    // false
console.log(str.includes2('TO BE'));       // false

String.prototype.slice2 = function(beginSlice, endSlice = 0) {
    let str = this;
    let newStr = '';
    let length = str.length;

    if (beginSlice < 0) {
        beginSlice = length + beginSlice;
    }

    if (endSlice < 0) {
        length = length + endSlice;
    }

    if (endSlice > 0 && endSlice <= str.length) {
        length = endSlice;
    }

    for (let i = beginSlice; i < length; i++) {
        newStr += str[i];
    }

    return newStr;
};

const s1 = 'Приближается утро.';

console.log(s1.slice(4, -2));  // лижается утр
console.log(s1.slice(-3));     // вернёт 'ро.'
console.log(s1.slice(-3, -1)); // вернёт 'ро'
console.log(s1.slice(0, -1));  // вернёт 'Приближается утро'
console.log(s1.slice(0, 2));
console.log(s1.slice(0, 10));
console.log(s1.slice(0, 20));

console.log('\n');

console.log(s1.slice2(4, -2));  // лижается утр
console.log(s1.slice2(-3));     // вернёт 'ро.'
console.log(s1.slice2(-3, -1)); // вернёт 'ро'
console.log(s1.slice2(0, -1));  // вернёт 'Приближается утро'
console.log(s1.slice2(0, 2));
console.log(s1.slice2(0, 10));
console.log(s1.slice2(0, 20));

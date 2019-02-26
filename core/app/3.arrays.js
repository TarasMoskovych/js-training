console.log('Arrays');

// Task 01
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.
console.log('Task 1');

const arr = [1, 2, 3, 4, 5];
const last1 = arr[arr.length - 1];
const last2 = arr.pop();
console.log(`${last1}\n${last2}\n${arr}`);
console.log('\n');

// Task 02
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
console.log('Task 2');

const arr21 = [1, 2, 'str', true];
arr21.push('last');
arr21.splice(0, 0, 'one');
const arr22 = [...arr21];
arr21[0] = 'modified';
console.log(`${arr21}\n${arr22}`);
console.log('\n');

// Task 03
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Display them in the conole.
console.log('Task 3');

const arr31 = [1, 2, 'zz', 5];
let arr32 = [];
arr31[3] = 'new elem';
arr31.splice(1, 1);
arr32 = arr31.slice(-2, 3);
console.log(`${arr31}\n${arr32}`);
console.log('\n');

// Task 04
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.
console.log('Task 4');

const arr41 = ['zz', false, { id: 5 }, 4, 'str'].forEach((item, i) => console.log(`${i} - ${item}`));
console.log('\n');

// Task 05
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.
console.log('Task 5');

let inc = 0;
const arr51 = new Array(101).fill().map(() => inc++);
const res51 = arr51.reduce((acc, item) => {
    if (item > 50) {
        return acc + item;
    }
    return acc;
}, 0);

console.log(`${arr51}\n${res51}`);
console.log('\n');

// Task 06
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.
console.log('Task 6');

const arr61 = ['s1', 's2', 'str'];
console.log(arr61.join('-'));
console.log('\n');

// Task 07
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.
console.log('Task 7');

const arr71 = new Array(20).fill().map(() =>  Math.floor(Math.random() * 20) + 1);
console.log(arr71);
console.log(arr71.sort((a, b) => a - b));
console.log(arr71.sort((a, b) => b - a));
console.log('\n');

// Task 08
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.
console.log('Task 8');

const arr81 = [3, 0, -1, 12, -2, -4, 0, 7, 2];
const arr82 = arr81.filter(p => p < 0);
const arr83 = arr81.filter(p => p === 0);
const arr84 = arr81.filter(p => p > 0);
console.log(`${arr81}\n${arr82}\n${arr83}\n${arr84}`);
console.log('\n');

// Task 09
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.
console.log('Task 9');

const arr91 = ['Jazz', 'Blues'];
arr91.push('Rock-n-Roll');
arr91.splice(arr91.length - 2, 1, 'Classics');
console.log(arr91.shift());
arr91.unshift('Rap', 'Reggae');
console.log(`${arr91}`);
console.log('\n');

// Task 10
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.
console.log('Task 10');

let s10 = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';
const letters = {};
s10.split('').forEach(item => {
    if (letters.hasOwnProperty(item)) {
        letters[item]++;
    } else {
        letters[item] = 1;
    }
});

for (let i in letters) {
    console.log(`${i}: ${letters[i]}`);
}

console.log('\n');

console.log(s10.split('').reduce((acc, cur) => {
    if (cur in acc) {
        acc[cur]++;
    }
    else {
        acc[cur] = 1;
    }
    return acc;
}, {}));

console.log('\n');

// Task 11
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.
console.log('Task 11');

const arr111 = new Array(20).fill().map(() =>  Math.floor(Math.random() * 20) + 1);
console.log(arr111[Math.floor(Math.random(Math.length) + 1)]);
console.log('\n');

// Task 12
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.
console.log('Task 12');

let arr121 = [];
let loop = 1;
for (let i = 0; i < 3; i++) {
    arr121[i] = [];
    for (let j = 0; j < 3; j++) {
        arr121[i][j] = loop++;
    }
}
console.log(arr121);
console.log('\n');

// Task 13
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.
console.log('Task 13');

const arr131 = [].concat(...arr121);
console.log(arr131);
console.log('\n');

// Task 14
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.
console.log('Task 14');

const arr141 = ['str', '111', 12, true, 'bzzz'];
console.log(arr141.slice(1, 3));
console.log('\n');

// Task 15
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and display it in the console.
console.log('Task 15');

const arr151 = ['str', '111', 12, true, 'bzzz'];
console.log(arr151.indexOf(true));
console.log('\n');

// Task 16
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.
console.log('Task 16');

const arr161 = new Array(20).fill().map(() =>  Math.floor(Math.random() * 20) + 1);
const arr162 = [];
console.log(arr161);
arr161.forEach(item => {
    if (!arr162.includes(item)) {
        arr162.push(item);
    }
});
console.log(arr162);
console.log('\n');

// Task 17
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.
console.log('Task 17');

const arr171 = new Array(20).fill().map(() =>  Math.floor(Math.random() * 10) + 1);
console.log(arr171);

for (let i = 0; i < arr171.length; i++) {
    let stop = false;
    let count = 0;
    let current = arr171[i];

    for (let j = i; j < arr171.length; j++) {
        if (current === arr171[j]) {
            count ++;
            if (count > 1) {
                arr171[j] = '*';
                arr171[i] = '*';
                stop = true;
            }
        }
    }

    if (stop) {
        break;
    }
}
console.log(arr171);
console.log('\n');

// Task 18
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.
console.log('Task 18');

const arr181 = new Array(10).fill().map(() => Math.floor(Math.random() * 20) + 1);
const toBinary = num => {
    let res = [];

    while (num > 0) {
        res.unshift(num % 2);
        num = Math.floor(num / 2);
    }

    return  res.join('');
};
const arr182 = [];
const arr185 = [];
const arr183 = [];
const arr184 = [];
arr181.forEach(item => {
    arr182.push(item.toString(2));
    arr185.push(toBinary(item));
    arr183.push(item.toString(8));
    arr184.push(item.toString(16).toLocaleUpperCase());
});
console.log(arr181);
console.log(arr182);
console.log(arr185);
console.log(arr183);
console.log(arr184);
console.log('\n');

// Task 19
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.
console.log('Task 19');

const str191 = 'a big brown fox jumps over the lazy dog';
const arr191 = str191.split(' ').filter(item => item.length <= 3);
console.log(str191);
console.log(arr191);
console.log('\n');

// Task 20
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.
console.log('Task 20');

const arr201 = ['1', '2', 1, 'str', 'true'];
console.log(arr201.every(item => typeof item === 'string'));
console.log('\n');

// Task 21
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.
console.log('Task 21');

let arr211 = new Array(10).fill().map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);
const binarySearch = (arr, value) => {
    let first = 0;
    let last = arr.length - 1;
    let middle = Math.floor((first + last) / 2);

    while (arr[middle] !== value && first < last) {
        if (value < arr[middle]) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }

        middle = Math.floor((first + last) / 2);
    }

    return arr[middle] !== value ? -1 : { [arr[middle]]: middle };
};
console.log(arr211);
console.log(binarySearch(arr211, 5));
console.log('\n');

// Task 22
// Polyfills
// Every
Array.prototype.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }

    return true;
};

console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true

console.log('\n');

console.log([12, 5, 8, 130, 44].every2(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every2(x => x >= 10)); // true

console.log('\n');

// Some
Array.prototype.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
};
const fruits = ['apple', 'banana', 'mango', 'guava'];
const checkAvailability = (arr, val) => arr.some(arrVal => val === arrVal);
const checkAvailability2 = (arr, val) => arr.some2(arrVal => val === arrVal);

console.log(checkAvailability(fruits, 'kela'));   // false
console.log(checkAvailability(fruits, 'banana')); // true
console.log([2, 5, 8, 1, 4].some(x => x > 10));  // false
console.log([12, 5, 8, 1, 4].some(x => x > 10)); // true

console.log('\n');

console.log(checkAvailability2(fruits, 'kela'));   // false
console.log(checkAvailability2(fruits, 'banana')); // true
console.log([2, 5, 8, 1, 4].some2(x => x > 10));  // false
console.log([12, 5, 8, 1, 4].some2(x => x > 10)); // true

console.log('\n');

const array = [12, 5, 8, 130, 44];
const isBigEnough = value => value >= 10;

// Filter
Array.prototype.filter2 = function(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }

    return newArr;
};

console.log(array.filter(isBigEnough));

console.log('\n');

console.log(array.filter2(isBigEnough));

// Reverse
Array.prototype.reverse2 = function() {
    const newArr = [...this];

    for (let i = 0; i < newArr.length; i++) {
        this[this.length - i - 1] = newArr[i];
    }

    return this;
};

const a = ['спершу', 'було', 'слово'];
const b = ['спершу', 'було', 'слово'];
const reversed = a.reverse();
const reversed2 = b.reverse2();

console.log(reversed === a);  // true
console.log(a);               // ['слово', 'було', 'спершу']
console.log(reversed);        // ['слово', 'було', 'спершу']

console.log('\n');

console.log(reversed2 === b);  // true
console.log(b);                // ['слово', 'було', 'спершу']
console.log(reversed2);        // ['слово', 'було', 'спершу']
console.log('\n');

// Reduce
Array.prototype.reduce2 = function(callback, initial = 0) {
    let res = initial;

    for (let i = 0; i < this.length; i++) {
        res = callback(res, this[i], i, this);
    }

    return res;
};
console.log([0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0)); // sum is 6
console.log([0, 1, 2, 3].reduce2((accumulator, currentValue) => accumulator + currentValue, 0)); // sum is 6
console.log([0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 5)); // sum is 11
console.log([0, 1, 2, 3].reduce2((accumulator, currentValue) => accumulator + currentValue, 5)); // sum is 11

console.log('\n');

console.log([{ x: 1 }, { x:2 }, { x:3 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, 0)); // logs 6
console.log([{ x: 1 }, { x:2 }, { x:3 }].reduce2((accumulator, currentValue) => accumulator + currentValue.x, 0)); // logs 6
console.log([{ x: 1 }, { x:2 }, { x:3 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, -5)); // logs 1
console.log([{ x: 1 }, { x:2 }, { x:3 }].reduce2((accumulator, currentValue) => accumulator + currentValue.x, -5)); // logs 1

console.log('\n');

console.log([[0, 1], [2, 3], [4, 5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []));
console.log([[0, 1], [2, 3], [4, 5]].reduce2((accumulator, currentValue) => accumulator.concat(currentValue), []));

console.log('\n');

console.log(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'].reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {}));
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

console.log(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'].reduce2((allNames, name) => {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {}));
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

console.log('\n');

// const arr = [35, 201, 54, 349, 36, 8, 9, 111119999];
// потрібно його відсортувати по сумі елементів, і щоб на виході був масив з відсортованими початковими елементами.
// на виході має бути масив
// [201, 8, 35, 9, 36, 54, 349, 111119999]
// тобто:
// 201 < 35, оскільки
// 2+0+1 < 3+5
// 3 < 7
// Якщо сума елементів однакова, то необхідно відсортувати по величині елементу, тобто
// 54 = 36
// 5+4 = 3+6
// але саме число 36 менше 56, тому воно повино знаходитися по меншому індексу ніж 56
const arrr = [35, 201, 54, 349, 36, 8, 9, 111119999];
console.log(arrr);
console.log([201, 8, 35, 9, 36, 54, 349, 111119999] + ' - expected');

console.log(arrr.sort((a, b) => {
    const getNumberSum = num => {
        return String(num).split('').reduce((acc, item) => {
            return parseInt(acc) + parseInt(item);
        }, 0);
    };
    const parsedA = getNumberSum(a);
    const parsedB = getNumberSum(b);

    if (parsedA === parsedB) {
        return a - b;
    }
    return parsedA - parsedB;
}) + ' - actual');

console.log('\n');

let arrr2 = new Array(10).fill().map(() => Math.floor(Math.random() * 20) + 1);
console.log(arrr2);

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        let buf = this[0];

        for (let j = 0; j < this.length - 1; j++) {
            if (this[j] > this[j + 1]) {
                buf = this[j];
                this[j] = this[j + 1];
                this[j + 1] = buf;
            }
        }
    }

    return this;
};

console.log(arrr2.bubbleSort());

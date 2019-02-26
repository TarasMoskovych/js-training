console.log('Object Date');

// Task 1
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy
console.log('Task 1');

const date = new Date();
const fullMonth = date.toLocaleDateString('en-US', { month: 'long' });
const parseNum = num => String(num).length > 1 ? num : '0' + num;
console.log(`${parseNum(date.getDate())}.${parseNum(date.getMonth() + 1)}.${date.getFullYear()}`);
console.log(`${parseNum(date.getDate())} ${fullMonth} ${date.getFullYear()}`);

console.log('\n');

// Task 2
// EN: Create an object Date from the string '15/03.2025'.
console.log('Task 2');

const date2 = new Date('2025/3/15');
console.log(`${parseNum(date2.getDate())}.${parseNum(date2.getMonth() + 1)}.${date2.getFullYear()}`);
console.log('\n');

// Task 3
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month
console.log('Task 3');

const date3 = new Date();
date3.setTime(date3.getTime() + 86400000);
console.log(date3.toLocaleDateString());

const firstDay = new Date(date3.getFullYear(), date3.getMonth(), 1);
console.log(firstDay.toDateString());

const lastDay = new Date(date3.getFullYear(), date3.getMonth() + 1, 0);
console.log(lastDay.toDateString());

console.log('\n');

// Task 4
// EN: Calculate the time of summing numbers from 1 to 1000.
console.log('Task 4');

let start = Date.now();
let res = (1000 * (1000 + 1)) / 2;
console.log(`Res 1: ${res}, time: ${Date.now() - start}`);

start = Date.now();
res = 0;

setTimeout(function() {
    for (let i = 0; i <= 1000; i++) {
        res += i;
    }
    console.log(`Res 2: ${res}, time2: ${(Date.now() - start) / 1000}`);
}, 2000);
console.log('\n');

// Task 5
// EN: Calculate the number of days from the current date to the New Year.
console.log('Task 5');

const date5 = new Date();
const date6 = new Date('2020-01-01');
const diffInSeconds = Math.abs(date5 - date6) / 1000;
console.log(Math.ceil(diffInSeconds / 60 / 60 / 24));

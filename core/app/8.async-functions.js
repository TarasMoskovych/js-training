console.log('Async functions');

// Task 01
// EN: Create an async function f1 as a Function Declaration Statement.
//     The function should take two parameters a and b and return a sum a+b.
//     Display the result of function in the console.
//     Process a promise and display value in the console.
async function f1(a, b) {
    return a + b;
}

(async function() {
    const res = await f1(5, 15);
    console.log(res);
})();

f1(2, 3).then(res => console.log(res));

// Task 02
// EN: Create an async function f2 as a Function Definition Expression.
//     The function should return the string 'Promise data' using Promise.resolve() method.
//     Display the result of function in the console.
//     Process a promise and display value in the console.
const f2 = () => Promise.resolve('Promise Data');
f2().then(str => console.log(str));

// Task 03
// EN: Create a class C1. Add async method f3.
//     Method should throw an exception 'Error occurs in f3 method'.
//     Create an instance of the class and call the method f3.
//     Process a promise and display value in the console.
class C1 {
    async f3() {
        throw new Error('Error in f3 method');
    }
}

const c1 = new C1();
c1.f3().catch(err => console.log(err));

// Task 04
// EN: Create a functiom makeRequest as a Function Declaration Statement.
//     The function should take one parameter - url and return a promise,
//     which should be resolved after 2s and it should return the value of the parameter url.
//     The first line of code in the function should display message 'makeRequest is called' in the console.
//     Create a function f4 as a Function Declaration Statement.
//     The function f4 should call the function makeRequest, get its result and display it in the console.
function makeRequest(url) {
    console.log('makeRequest is called');

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(url);
        }, 2000);
    });
}

function f4() {
    makeRequest('some url').then(res => console.log(res));
}

f4();

// Task 05
// EN: Make changes to the function f4 from the previous task. This function should display the value
//     of the parameter of the function makeRequest in the console.
function f5(p) {
    console.log('Param: ', p);
    makeRequest(p).then(res => console.log(res));
}

f5('task 5 url');

// Task 06
// EN: Create an async function f6 as a Function Declaration Statement.
//     This function should call the function makeRequest two times with different values of its parameter.
//     Create and return the array from the function f6, which should contains the values of the
//     parameter of the function makeRequest.
//     Process the result of the function f6.
async function f6() {
    const arr = [];

    for (let i = 0; i < 2; i++) {
        await makeRequest(`url ${i}`).then(res => arr.push(res));
    }

    return arr;
}

(async () => await f6().then(res => console.log(res)))();

// Task 08
// EN: Create the array of urls ['http://a', 'http://b'].
//     Create the function sendRequest which should take one parameter - url.
//     The function should display the message 'sendRequest is called' in the console
//     in its first line of code. Then the function should return the object { name: 'Ann' } for the
//     first url after 2s and the object { age: 16 } for the second url after 2s.
//     Create the async function f8, which should call the function sendRequest with each value
//     from the array and return the object {name: 'Ann', age: 16}.
//     Process the reuslt of the function f8
const arr8 = ['http://a', 'http://b'];

function sendRequest(url) {
    console.log('sendRequest is called with url: ', url);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(url.includes('a') ? { name: 'Ann' } : { age: 16 });
        }, 2000);
    });
}

const f8 = async () => Object.assign({}, await sendRequest(arr8[0]), await sendRequest(arr8[1]));

async function f8Loop() {
    const obj = {};

    for await (const i of arr8) {
        Object.assign(obj, await sendRequest(i));
    }

    return obj;
}

f8Loop().then(res => console.log(res));
f8().then(res => console.log(res));

// Test
function test() {
    let ct = 1;

    async function inc() {
        ct++;
        console.log(ct);

        ct++;
        console.log(ct);

        ct++;

        await delay();

        console.log(ct);

        ct++;
        console.log(ct);
    }

    inc();

    ct = 100;

    function delay() {
        setTimeout(function() {
            console.log(ct);
        }, 0);
    }
}

test();

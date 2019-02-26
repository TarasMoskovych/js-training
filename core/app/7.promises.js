console.log('Promises');

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const p1 = new Promise(() => console.log('Promise is created'));

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
console.log(Promise.resolve('Promise Data').then(msg => console.log(msg)));

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
console.log(Promise.reject('Promise Error').catch(err => console.log(err)));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const p4 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise Data 4');
    }, 3000);
}).then(data => console.log(data));

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.
const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: function(paramName) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError: function(paramName) {
        console.log(`Promise is rejected with error: ${paramName}`);
    }
};

const createPromise = document.querySelector('#btn-create-promise');
const resolvePromise = document.querySelector('#btn-resolve-promise');
const rejectPromise = document.querySelector('#btn-reject-promise');

createPromise.addEventListener('click', () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve
        handlePromise.reject = reject;
    });
    console.log(handlePromise.promise);
});

resolvePromise.addEventListener('click', () => {
    handlePromise.resolve('Resolved');
    handlePromise.promise.then(val => handlePromise.onSuccess(val));
    console.log(handlePromise.promise);
});

rejectPromise.addEventListener('click', () => {
    handlePromise.reject('Rejected');
    handlePromise.promise.catch(err => handlePromise.onError(err));
    console.log(handlePromise.promise);
});

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
function onSuccess(param) {
    if (!param) throw new Error('Param cannot be empty!');
    return `${param} someName`;
}

function print(param) {
    console.log(param);
}

const p07 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My name is');
    }, 1000);
});

p07.then(val => onSuccess(val)).then(val => print(val)).catch(err => console.log(err));

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.
p07.then(val => onSuccess()).then(val => print(val)).catch(err => console.log(err));

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData
const getPromiseData = p => console.log(p);
const obj = { name: 'Ann' };
const p09 = new Promise(reslove => reslove(obj)).then(val => getPromiseData(val));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль
const p101 = new Promise(resolve => {
    setTimeout(() => {
        resolve({ name: 'Ann' });
    }, 2000);
});

const p102 = new Promise(resolve => {
    setTimeout(() => {
        resolve({ age: 16 });
    }, 3000);
});

const res = {};

Promise.all([p101, p102])
    .then(val => val.forEach(item => Object.assign(res, item)))
    .then(() => console.log(res));

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.
const p102r = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected');
    }, 3000);
});

Promise.all([p101, p102r])
    .then(val => console.log(val))
    .catch(err => console.log('Task 11', err));

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.
let rejectedRef = null;

const p121 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Task 12: Promise Data');
    }, 5000);
});

const p122 = new Promise((resolve, reject) => {
    rejectedRef = reject;
});

document.querySelector('#btn-cancel-promise').addEventListener('click', () => {
    rejectedRef('Task 12: Rejected')
});

Promise.race([p121, p122]).then(val => console.log(val)).catch(err => console.log(err));

function chaining(arr) {
    return new Promise(async (resolve) => {
        for (let i = 0; i < arr.length; i++) {
            await arr[i].then(res => console.log(res));
        }

        setTimeout(() => {
            resolve('completed');
        }, 2000);
    });
}

chaining(generatePromiseArr()).then(res => console.log(res));

function generatePromiseArr(length = 5) {
    const promises = [];

    for (let i = 0; i < length; i++) {
        i === length - 1
            ? promises.push(createPromise(i, 'Last Promise'))
            : promises.push(createPromise(i));
    }

    return promises;
}

function createPromise(id, name) {
    const random = Math.floor(Math.random() * 2000);
    name = name || 'Task'

    return new Promise(resolve => {
        setTimeout(() => {
           resolve({ name : `${name}: ${id}`, ms: random });
        }, random);
    });
}

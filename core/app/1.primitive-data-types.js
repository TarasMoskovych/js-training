console.log('Primitive Data Types:');

// Task 02
// Объявите две переменные: admin и name. Установите значение переменной name
// в ваше имя. Скопируйте это значение в переменную admin и выведите его в консоль.
let admin, name = 'Taras';
admin = name;
console.log('Task 02:' + admin);
console.log('\n');

// Task 03
// Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную result1 и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.
const a = 10, b = 2, c = 5;
const result1 = a + b + c;
const min = Math.min(a, b, c);
console.log(`Task 03: res: ${result1}, min: ${min}`);
console.log('\n');

// Task 04
// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.
const hour = 10, minute = 40, second = 25;
console.log(`Task 04: ${hour}:${minute}:${second}`);
console.log('\n');

// Task 06
// Объявите две переменные, которые содержат стоимость товаров:
// первый товар - 0.10 USD, второй - 0.20 USD
// Вычислите сумму и выведите в консоль. Используйте toFixed()
const price1 = 0.10, price2 = 0.20;
console.log(`Task 06: ${(price1 + price2).toFixed(2)}$`);
console.log('\n');

// Task 07
// Объявите переменную a.
// Если значение переменной равно 0, выведите в консоль "True", иначе "False".
// Проверьте, что будет появляться в консоли для значений 1, 0, -3.
const a2 = 0;
a2 === 0 ? console.log('Task 07: True') : console.log('Task 07: False');
console.log('\n');

// Task 08
// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножте его на 10
// и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.
const a8 = 3, b8 = 1;
const res8 = a8 + b8;
res8 > 5 ? console.log('Task 08: ' + res8) : console.log('Task 08: ' + res8 * 8);
console.log('\n');

// Task 10
// Выведите в консоль все числа от 1 до 10.
console.log('Task 10');

let i10 = 1;
while (i10 <= 10) {
    console.log(i10);
    i10++;
}
console.log('\n');

// Task 11
// Выведите в консоль все четные числа от 1 до 15.
console.log('Task 11');

let i11 = 1;
while (i11 <= 10) {
    if (i11 % 2 === 0) {
        console.log(i11);
    }
    i11++;
}
console.log('\n');

// Task 12
// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
// x
// xx
// xxx
// xxxx
// ...
console.log('Task 12');

let p12 = '*';
for (let i = 1; i <= 10; i++) {
    console.log(p12.repeat(i));
}
console.log('\n');


// Task 13
// Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
// 1
// 22
// 333
// 4444
// ...
console.log('Task 13');

let p13;
for (let i = 1; i <= 9; i++) {
    p13 = i + '';
    console.log(p13.repeat(i));
}
console.log('\n');

// Task 14
// Запросите у пользователя какое либо значение и выведите его в консоль.
console.log('Task 14');

const input = prompt('Input a: ');
console.log(input);
console.log('\n');

// Task 15
// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
console.log('Task 15');

const a15 = 1, b15 = 3;
const res15 = (a15 + b15 < 4) ? 'few' : 'many';
console.log(res15);
console.log('\n');

// Task 16
// Перепишите if..else используя несколько тернарных операторов.
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
console.log('Task 16');

const login = 'Вася';
const message = login === 'Вася' ? 'Привет' : login === 'Директор' ? 'Здравствуйте' :  login === '' ? 'Нет логина' : '';
console.log(message);
console.log('\n');

// Task 17
// Замените for на while без изменения поведения цикла
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }
console.log('Task 17');

let i17 = 0;
while(i17 < 3) {
    alert( "номер " + i17 + "!" );
    i17++;
}
console.log('\n');

// Task 18
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предусматривать обработку нечисловых строк в этой задаче необязательно.
console.log('Task 18');

let switcher = true; // change to true'
let input18;

while(switcher) {
    input18 = +prompt('Input value > 100 to exit: ');

    if (input18 <= 100) {
        switcher = false;
    }
}
console.log('\n');

// Task 19
// Переписать следующий код используя switch
// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
console.log('Task 19');

let a19;
a19 = +prompt('a?', '');
switch (true) {
    case a19 === 0:
        alert(0);
        break;
    case a19 === 1:
        alert(1);
        break;
    case a19 === 2:
    case a19 === 3:
        alert('2, 3');
}
console.log('\n');

// Task 20
// Объявите переменную и проинициализируйте ее строчным значением в переменном
// регистре. (Например так "таООооОддОО")
// Напишите код, который преобразует эту строку к виду:
// первая буква в верхнем регистре, остальные буквы в нижнем регистре.
// Выведите результат работы в консоль
// Используйте: toUpperCase/toLowerCase, slice.
console.log('Task 20');

let str20 = 'таООооОддОО';
str20 = str20.slice(0, 1).toUpperCase() + str20.toLowerCase();
console.log(str20);
console.log('\n');

// Task 21
// Напишите код, который выводит в консоль true, если строка str содержит
// „viagra“ или „XXX“, а иначе false.
// Тестовые данные: 'buy ViAgRA now', 'free xxxxx'
console.log('Task 21');

const str21 = 'XXX';
const searchWords = ['viagra', 'XXX'];
let flag = false;

searchWords.forEach(item => {
    if (str21.indexOf(item) !== -1) {
        flag = true;
        return;
    }
});

console.log(flag);
console.log('\n');

// Task 22
// Напишите код, который проверяет длину строки str, и если она превосходит
// maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом должна быть (при необходимости) усечённая строка.
// Выведите строку в консоль
// Тестовые данные:
//  "Вот, что мне хотелось бы сказать на эту тему:", 20
//  "Всем привет!", 20
console.log('Task 22');

const maxlength = 20;
let str22 = 'Вот, что мне хотелось бы сказать на эту тему:';

if (str22.length > maxlength) {
    str22 = str22.substr(0, maxlength) + '...';
}
console.log(str22);
console.log('\n');

// Task 23
// Напишите код, который из строки $100 получит число и выведите его в консоль.
console.log('Task 23');

let str23 = `$1$0$0`;
let newStr = '';
str23.split('').forEach(item => {
    if (!Number.isNaN(Number.parseInt(item))) {
        newStr += item;
    }
});
str23 = newStr;
console.log(str23);
console.log('\n');

// Task 24
// Напишите код, который проверит, является ли переменная промисом
console.log('Task 24');

const promise = new Promise(() => {});
console.log(promise instanceof Promise);

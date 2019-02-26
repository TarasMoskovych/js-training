console.log('DOM');

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.
console.log('Task 1');

const t01 = document.getElementById('t01');
console.log(t01);
console.log(t01.parentElement);
if (t01.childNodes.length !== 0) {
    console.log(t01.childNodes);
}
console.log('\n');

// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.
console.log('Task 2');

console.log(document.getElementsByTagName('li').length);
document.querySelector('ul').append(document.querySelector('ul').firstElementChild.cloneNode(true));
console.log(document.getElementsByTagName('li').length);
console.log('\n');

// Task 03
// Получить элементы <p> используя метод querySelectorAll() и вывети их в консоль
console.log('Task 3');

console.log(document.querySelectorAll('li').length);
console.log('\n');

// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00
console.log('Task 4');

document.querySelectorAll('div')
    .forEach(div => div.querySelectorAll('p')
    .forEach(p => p.style.color = '#ffff00'));
console.log('\n');

// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку
console.log('Task 5');

let res = 0;
document.querySelector('table').querySelectorAll('td').forEach(td => {
    if (td.innerText.trim()) {
        res += parseFloat(td.innerText);
    }
});
console.log(Math.round(res));
console.log('\n');

// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06
console.log('Task 6');

console.log(document.querySelector('#t06').attributes);
console.log('\n');

// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().
console.log('Task 7');

const el = document.querySelector('#btn-cancel-promise');
console.log(window.getComputedStyle(el));
console.log('\n');

// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</p>
console.log('Task 8');

document.getElementById('t08').innerHTML = '<p>This is a paragraph</p>';
console.log('\n');

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем
console.log('Task 9');
const el9 = document.createElement('div');
const t08 = document.querySelector('#t08');

el9.setAttribute('class', 'c09');
el9.setAttribute('data-class', 'c09');

t08.addEventListener('click', function(e) {
    el9.innerText = prompt('Type some text: ');
    t08.prepend(el9);
});

// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней
console.log('Task 10');

document.querySelector('#t06').removeAttribute('role');
document.querySelector('#btn').addEventListener('click', function() {
    this.remove();
});

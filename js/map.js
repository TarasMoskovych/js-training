function map(fn, array) {
    var arr = [];

    for(var i = 0; i < array.length; i++) {
        arr.push(fn(array[i]));
    }

    return arr;
}

function square(x) {
    return x * x;
}

console.log("> Test map");

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
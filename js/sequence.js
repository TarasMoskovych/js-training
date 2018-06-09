function sequence(start, step) {
    var start = start || 0;
    var step = step || 1;

    return function generator() {
        return (start += step) - step;
    }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log("> Test sequence");

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8
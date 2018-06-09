function fmap(a, gen) {
    return function newGen() {
        return a(gen());
    }
}


function sequence(start, step) {
    var start = start || 0;
    var step = step || 1;

    return function generator() {
        return (start += step) - step;
    }
}

var gen = sequence(1, 1);

function square(x) {
    return x * x;
}

var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16
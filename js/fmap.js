function fmap(a, gen) {
    return function newGen() {
        return a(gen.apply(null, arguments));
    }
}

var gen = sequence(1, 1);

function square(x) {
    return x * x;
}

var squareGen = fmap(square, gen);

console.log("> Test fmap1");

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

function add(a, b) {
    return a + b;
}

var squareAdd = fmap(square, add);

console.log("> Test fmap2");

console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
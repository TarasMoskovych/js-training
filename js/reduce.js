// Reduce polyfill
(function () {
    if(!Array.prototype.reduce2) {
        Array.prototype.reduce2 = function (callback, initial) {
            var arr = this, accum = initial;

            if(isNaN(initial) || initial < 0 || typeof initial !== 'number') {
                accum = 0;
            }

            for(var i = 0; i < arr.length; i++) {
                accum = callback(accum, arr[i]);
            }

            return accum;
        }
    }
})();

var arr = fillRandom(10);

console.log("> Test reduce");

console.log(arr.reduce2(sum, 0));
console.log(arr.reduce(sum, 0));

console.log(arr.reduce2(sum, 5));
console.log(arr.reduce(sum, 5));

// Negative testing
console.log(arr.reduce2(sum, "String"));
console.log(arr.reduce2(sum, -5));
console.log(arr.reduce2(sum, true));

function sum(a, b) {
    return a + b;
}

function fillRandom(length) {
    var arr = [];

    for(var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }

    return arr;
}
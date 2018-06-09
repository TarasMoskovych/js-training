function take(fn, count) {
    var arr = [];

    for(var i = 0; i < count; i++) {
        arr.push(fn());
    }

    return arr;
}

console.log("> Test take");

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
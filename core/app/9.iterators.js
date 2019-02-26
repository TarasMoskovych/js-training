console.log('Iterators');

// Task 1
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.
console.log('Task 1');

function keyValueIterable(target) {
  target[Symbol.iterator] = () => {
    const keys = Object.keys(target);

    return {
      next() {
        const done = keys.length === 0;
        const key = keys.shift();

        return {
          done,
          value: [key, target[key]]
        };
      }
    };
  };

  return target;
}

const colors = {
  green: '#0e0',
  orange: '#f50',
  pink: '#e07'
};

const colors2 = {
  green: '#0e0',
  orange: '#f50',
  pink: '#e07'
};

Object.defineProperty(colors2, Symbol.iterator, {
  value: function() {
    const keys = Object.keys(this);

    return {
      next: () => {
        const done = keys.length === 0;
        const key = keys.shift();

        return {
          done,
          value: [key, this[key]]
        };
      }
    };
  }
});

const itColors = keyValueIterable(colors);

for (const [, color] of itColors) {
  console.log(color);
}

for (const [key, color] of colors2) {
  console.log(`${key}: ${color}`);
}

console.log('\n');

// Task 2
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random
console.log('Task 2');

function take(sequence, amount) {
  const nums = [];
  let counter = 0;

  for (let s of sequence) {
    if (counter === amount) break;
    nums.push(s);
    counter++;
  }

  return nums;
}

function take2(sequence, amount) {
 return {
   [Symbol.iterator]() {
     const iterator = sequence[Symbol.iterator]();

     return {
       next() {
         if (amount-- < 1) { return { done: true } };
         return iterator.next();
       }
     };
   }
 };
}

const random = {
  [Symbol.iterator]: () => ({
    next: () => ({
      value: Math.random()
    })
  })
};

const a = [...take(random, 3)];
console.log(a);

const b = [...take2(random, 3)];
console.log(b);

console.log('\n');

// Task 3
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break
console.log('Task 3');

const Fib = {
  [Symbol.iterator]() {
    let a = 1;
    let b = 1;
    let current;

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        current = b;
        b = a;
        a = a + current;

        return {
          value: current,
          done: false
        };
      },
      return(v) {
        console.log('Fibonacci sequence is terminated');
        return {
          value: v,
          done: true
        };
      }
    };
  }
};

for (let v of Fib) {
  console.log(v);
  if (v > 50) break;
}

console.log('\n');

// Task 4
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
console.log('Task 4');

Number.prototype[Symbol.iterator] = function* () {
  const length = Math.abs(this) + 1;
  const sign = this > 0 ? 1 : -1;

  yield 0;

  for (let i = 1; i < length + 1; i++) {
    yield i * sign;
  }
};


console.log([...-3]);
console.log([...3]);
console.log('\n');

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  // 0..9
  yield* generateSequence(48, 57);
  // A..Z
  yield* generateSequence(65, 90);
  // a..z
  yield* generateSequence(97, 122);
}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

console.log(str);
console.log('\n');

const Fib2 = {
  *[Symbol.iterator]() {
    let a = 1;
    let b = 1;
    let current;

    while (true) {
      current = b;
      b = a;
      a += current;

      yield current;
    }
  }
};

for (const n of Fib2) {
  if (n > 2000) break;
  console.log(n);
}

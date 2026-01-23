/// Warm up exercises for JavaScript

// 1. Print multiple lines with a single console.log statement
console.log("This\nThat\nAnd so on...");

// 2. Overflow with funcs
const new_func = function func () {
  return (2 * func());
}

//3. Concatenating functions
function map (func, arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    func = function func(num) {
      num ** 3;
    }
    res[i] = func(arr[i])
  }

  console.log(res);
}

const arr = [2, 4, 6, 8, 10];
map(function () {}, arr);
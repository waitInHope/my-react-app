

function curry(fn, ...rest) {
  return function(...innerArgs) {
    let allArgs = [...rest, ...innerArgs];
    console.log("allArgs", allArgs)
    if(allArgs.length === fn.length) {
      return fn.apply(this, allArgs);
    } else {
      return curry(fn, ...allArgs);
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}

let addCurry = curry(add);
console.log(addCurry(1, 2)(3));
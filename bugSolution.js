function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //This is the solution
  }
  return a + b;
}
console.log(foo(1,2)); //3
console.log(foo(null, 2));//NaN
console.log(foo(1, null));//NaN
console.log(foo(null, null));//NaN
console.log(foo(1, 'a'));//NaN
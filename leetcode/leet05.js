// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns an integer.

let map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};



function factorialNumber(num) {
  if (num < 0) {
    return "Factorial does not exist for negative numbers";
  }
  if (num ===0) {
    return 1;
  }
  let output = 1;
  for (let i = 1; i <= num; i++) {
    output = output * i;
  }

  return output;
}






// Example usage:
console.log(factorialNumber(5)); // Output: 120
console.log(factorialNumber(0)); // Output: 1


console.log(factorialNumber(4));

// function factorial(num) {
//   let result = 1;
//   for (let x = 1; x < num + 1; x++) {
//     result = result * x;
//   }
//   return result;
// }

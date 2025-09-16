// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


let createCounter = function (n){
    return function() {
        return n++;
    };
};



const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = createCounter(-2);
console.log(counter2());
console.log(counter2());
console.log(counter2());
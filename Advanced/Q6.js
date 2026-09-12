// Module 3 Advanced JavaScript - Q6 (Function prototype - delay)

// a) delay for functions that take two parameters.
// The prototype property is used by the core of JavaScript itself - call, apply and
// bind all belong to the Function prototype - so adding delay here makes it available
// on every function, since they all inherit from that prototype.
Function.prototype.delay = function(ms) {
    let func = this;                      // context: the function delay was called on
    return function(a, b) {               // delay returns a function, which is called with the args
        // function to be executed, then milliseconds to delay, then arguments for function
        setTimeout(func, ms, a, b);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5);   // prints 25 after 500 milliseconds


// b) Use apply so that delayed functions can take any number of parameters.
Function.prototype.delayAny = function(ms) {
    let func = this;
    return function() {                   // a function, not an arrow function, so it has 'arguments'
        // the arrow function keeps the context and arguments of the wrapper, then
        // apply forwards them all to the original function, no matter how many there are
        setTimeout(() => func.apply(this, arguments), ms);
    };
};

multiply.delayAny(1000)(5, 5);   // prints 25 after 1000 milliseconds


// c) multiply4 takes 4 parameters, and delayAny still works unchanged.
function multiply4(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply4.delayAny(1500)(2, 3, 4, 5);   // prints 120 after 1500 milliseconds

// The version from a) cannot do this - it names exactly two arguments, so c and d
// are undefined and the result is NaN:
multiply4.delay(2000)(2, 3, 4, 5);      // prints NaN after 2000 milliseconds
// Module 3 Advanced JavaScript - Q8 (validation decorator)

// a) validateStringArg - a decorator that wraps fn and checks its argument is a string
function validateStringArg(fn) {              // decorator takes a function as parameter
    return function(arg) {                    // and returns that function with extra bits - validation
        if (typeof arg !== 'string') {
            // throw our own custom error, to intentionally cause an error for a specific reason
            throw new TypeError(`Invalid argument: ${arg} is not a string`);
        }
        return fn(arg);                       // otherwise, call the original function
    };
}

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);


// b) orderItems with the rest operator, so it takes multiple item names
function orderManyItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}


// c) validateStringArgs - validates ALL arguments passed to fn.
// The returned function doesn't name its arguments, so it works with any number of them.
function validateStringArgs(fn) {
    return function() {                       // a function, not an arrow, so it has 'arguments'
        for (let arg of arguments) {
            if (typeof arg !== 'string') {
                throw new TypeError(`Invalid argument: ${arg} is not a string`);
            }
        }
        // forwarding with apply passes all arguments along with the context,
        // no matter how many there are
        return fn.apply(this, arguments);
    };
}

const validatedOrderItems = validateStringArgs(orderManyItems);


// d) test both decorated functions, using try-catch to handle the thrown errors

console.log('--- part a ---');
try {
    console.log(validatedOrderItem("Apple Watch"));   // runs the function
    console.log(validatedOrderItem(123));             // throws - never reaches the log
} catch (err) {                                       // caught, so the code continues
    console.log('Caught an error: ' + err.message);   // all errors have a message property
}

console.log('--- part c ---');
try {
    console.log(validatedOrderItems("Apple Watch", "iPhone", "iPad"));   // all strings - runs
} catch (err) {
    console.log('Caught an error: ' + err.message);
}

try {
    console.log(validatedOrderItems("Apple Watch", 123, "iPad"));        // second arg fails
} catch (err) {
    console.log('Caught an error: ' + err.message);
}

console.log('even though errors occurred above, they were caught so code continues');
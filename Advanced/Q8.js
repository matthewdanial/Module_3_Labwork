
//a)
function validateStringArg(fn) {
    return function(arg) {
        if (typeof arg !== 'string') {
            throw new SyntaxError(`Invalid argument: ${arg} is not a string`);
        }
        return fn(arg);
    };
}

function orderItems(itemName) {
    return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);


//b)
function orderManyItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`;
}


//c)
function validateStringArgs(fn) {
    return function() {
        for (let arg of arguments) {
            if (typeof arg !== 'string') {
                throw new SyntaxError(`Invalid argument: ${arg} is not a string`);
            }
        }
        return fn.apply(this, arguments);
    };
}

const validatedOrderItems = validateStringArgs(orderManyItems);


//d)
try {
    console.log(validatedOrderItem("Apple Watch"));
    console.log(validatedOrderItem(123));
} catch (err) {
    console.log('Caught an error: ' + err.message);
}

try {
    console.log(validatedOrderItems("Apple Watch", "iPhone", "iPad"));
} catch (err) {
    console.log('Caught an error: ' + err.message);
}

try {
    console.log(validatedOrderItems("Apple Watch", 123, "iPad"));
} catch (err) {
    console.log('Caught an error: ' + err.message);
}
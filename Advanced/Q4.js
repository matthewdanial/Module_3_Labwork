// Module 3 Advanced JavaScript - Q4 (Fibonacci)

// a) printFibonacci - uses setInterval to print a Fibonacci number every second
function printFibonacci() {
    let previous = 0, current = 1;        // part of the outer environment record
    // intervalTimer is a reference to the interval, to allow it to be cancelled
    let intervalTimer = setInterval(function printNext() {
        console.log('printFibonacci: ' + current);
        let next = previous + current;    // the next number is the sum of the previous 2
        previous = current;               // shuffle both values along, in the outer environment
        current = next;
    }, 1000);                             // delay is milliseconds between intervals
}

//printFibonacci(); // runs forever - see part c for the version with an exit condition


// b) printFibonacciTimeouts - uses a nested (recursive) setTimeout to do the same thing
function printFibonacciTimeouts() {
    let previous = 0, current = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis() {    // named function, so we can refer to it recursively
        console.log('printFibonacciTimeouts: ' + current);
        let next = previous + current;
        previous = current;
        current = next;
        // we do need to call setTimeout recursively so that it repeats executing the function
        setTimeout(repeatThis, 1000);
    }, 1000);
}

//printFibonacciTimeouts(); // also runs forever


// c) printFibonacciLimit - stops once an exit condition is reached:
//    a maximum number of calls, given by the limit argument
function printFibonacciLimit(limit) {
    let previous = 0, current = 1;
    let counter = 1;                      // keep track of how many times the interval has executed
    let intervalTimer = setInterval(function printNext() {
        console.log('printFibonacciLimit: printed ' + counter + ' of ' + limit + ' - ' + current);
        let next = previous + current;
        previous = current;
        current = next;
        if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
        counter++;
    }, 1000);
}

printFibonacciLimit(10); // print the first 10 Fibonacci numbers, one every second
// Module 3 Advanced JavaScript - Q3 (debounce)

// a) debounce decorator - suspends calls to func until 1000ms of inactivity
function debounce(func) {                 // decorator takes a function as parameter
    let timerId;                          // part of the outer environment record,
                                          // so the closure below remembers it
    return function() {                   // returns that function with extra bits - debouncing
        clearTimeout(timerId);            // cancel the previous timer during its delay
        timerId = setTimeout(func, 1000); // start a new 1 second timer for this call
    };
}

function printMe() {
    console.log('printing debounced message');
}
printMe = debounce(printMe);

// fire off 3 calls to printMe within 300ms
// only the LAST one prints, after 1000ms of no calls (ie. at about 1300ms)
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);


// b) debounce with a second argument ms, instead of hardcoding 1000
function debounceMs(func, ms) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(func, ms);   // ms comes from the outer environment
    };
}

function printMeB() {
    console.log('printing debounced message (500ms version)');
}
printMeB = debounceMs(printMeB, 500);

// 3 calls 100ms apart, starting at 2000ms - only the last prints, at about 2700ms
setTimeout(printMeB, 2000);
setTimeout(printMeB, 2100);
setTimeout(printMeB, 2200);


// c) debounce that forwards arguments to the original function
function debounceArgs(func, ms) {
    let timerId;
    return function() {                   // a function, not an arrow function,
                                          // so that it has its own 'arguments'
        clearTimeout(timerId);
        // arrow function keeps the context and arguments of the wrapper,
        // then apply forwards them to the original function
        timerId = setTimeout(() => func.apply(this, arguments), ms);
    };
}

function printMeC(msg) {
    console.log(`printing debounced message: ${msg}`);
}
printMeC = debounceArgs(printMeC, 1000);

// 3 calls 100ms apart, starting at 3500ms
// only the most recent call prints, at about 4700ms, with its own argument
setTimeout(printMeC, 3500, 'first call - ignored');
setTimeout(printMeC, 3600, 'second call - ignored');
setTimeout(printMeC, 3700, 'third call - this one prints');
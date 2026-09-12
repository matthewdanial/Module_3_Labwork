/*
The four tests print in this order:#4, #3, #2, #1

#4 prints first due to it being synchronous call, not a timer.
All synchronous code runs to completion before any scheduled callback fires.
#1, #2, #3 are asynchronous code, because setTimeout is an asynchronous function 
(It does not pause during the delay period). Instead each delayed function is put on a timer,
and other synchronous code still executes until each timer expires and the delayed function executes.
So the three delayed functions are executed in order of their delay not the order they were written
#4 (Printed first, synchronous therefore no delay)
#3(Printed second, even though it comes before #4 there still is no delay)
#2(Printed third after 20ms)
#1(Printed last after 100ms)
*/


//b)
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');   // asynchronous code with 100ms delay
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');     // asynchronous code with 20ms delay
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');       // asynchronous code with no delay
delayMsg('#4: Not delayed at all');                  // standard synchronous code

// c) 
let timerId = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');

//d)
clearTimeout(timerId);
console.log('#5 was cancelled before its 15 second delay elapsed');


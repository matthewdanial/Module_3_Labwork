
function makeCounter() {
    let currentCount = 0;
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount
    };
}

let counter1 = makeCounter();
counter1();
counter1();

//a)
let counter2 = makeCounter();     

console.log('--- part a ---');
counter2(); // 1  
counter2(); // 2
counter1(); // 3 

//b)

function makeCounterFrom(startFrom) {
    let currentCount = startFrom;  // startFrom is also part of the outer environment
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

console.log('--- part b ---');
let counter3 = makeCounterFrom(10);
counter3(); // 11  - increments before logging, same order as the original
counter3(); // 12

// c) 

function makeCounterBy(startFrom, incrementBy) {
    let currentCount = startFrom;  // both parameters are read by the one closure
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

console.log('--- part c ---');
let counter4 = makeCounterBy(10, 5);
counter4(); // 15
counter4(); // 20

let counter5 = makeCounterBy(0, 1);  // reproduces the original makeCounter
counter5(); // 1
counter5(); // 2
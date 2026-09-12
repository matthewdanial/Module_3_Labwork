
function makeCounter() {
    let currentCount = 0;
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

let counter1 = makeCounter();
counter1();
counter1();

//a)
let counter2 = makeCounter();     

counter2();  
counter2(); 
counter1();  

//b)

function makeCounterFrom(startFrom) {
    let currentCount = startFrom;  
    return function() {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

let counter3 = makeCounterFrom(10);
counter3(); 
counter3(); 

// c) 

function makeCounterBy(startFrom, incrementBy) {
    let currentCount = startFrom;  
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter4 = makeCounterBy(10, 5);
counter4();
counter4();

let counter5 = makeCounterBy(0, 1);  
counter5(); 
counter5();
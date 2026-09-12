
//a) 
function printFibonacci() {
    let previous = 0, current = 1;        
    let intervalTimer = setInterval(function printNext() {
        console.log('printFibonacci: ' + current);
        let next = previous + current;    
        previous = current;               
        current = next;
    }, 1000);                             
}

//printFibonacci();


//b) 
function printFibonacciTimeouts() {
    let previous = 0, current = 1;
    setTimeout(function repeatThis() {    
        console.log('printFibonacciTimeouts: ' + current);
        let next = previous + current;
        previous = current;
        current = next;
        setTimeout(repeatThis, 1000);
    }, 1000);
}

//printFibonacciTimeouts();


//c) 
function printFibonacciLimit(limit) {
    let previous = 0, current = 1;
    let counter = 1;                      
    let intervalTimer = setInterval(function printNext() {
        console.log('printFibonacciLimit: printed ' + counter + ' of ' + limit + ' - ' + current);
        let next = previous + current;
        previous = current;
        current = next;
        if (counter == limit) clearInterval(intervalTimer); 
        counter++;
    }, 1000);
}

printFibonacciLimit(10);

//a) 
function debounce(func) {                 
    let timerId;                          
                                          
    return function() {                   
        clearTimeout(timerId);            
        timerId = setTimeout(func, 1000); 
    };
}

function printMe() {
    console.log('printing debounced message');
}
printMe = debounce(printMe);


setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);


//b) 
function debounceMs(func, ms) {
    let timerId;
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(func, ms);   
    };
}

function printMeB() {
    console.log('printing debounced message (500ms version)');
}
printMeB = debounceMs(printMeB, 500);


setTimeout(printMeB, 2000);
setTimeout(printMeB, 2100);
setTimeout(printMeB, 2200);


//c)
function debounceArgs(func, ms) {
    let timerId;
    return function() {                   
                                          
        clearTimeout(timerId);
        
    
        timerId = setTimeout(() => func.apply(this, arguments), ms);
    };
}

function printMeC(msg) {
    console.log(`printing debounced message: ${msg}`);
}
printMeC = debounceArgs(printMeC, 1000);



setTimeout(printMeC, 3500, 'first call - ignored');
setTimeout(printMeC, 3600, 'second call - ignored');
setTimeout(printMeC, 3700, 'third call - this one prints');
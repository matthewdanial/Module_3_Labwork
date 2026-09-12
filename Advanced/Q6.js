
//a)
Function.prototype.delay = function(ms) {
    let func = this;
    return function(a, b) {
        setTimeout(func, ms, a, b);
    };
};

function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5);


//b)
Function.prototype.delayAny = function(ms) {
    let func = this;
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    };
};

multiply.delayAny(1000)(5, 5);


//c)
function multiply4(a, b, c, d) {
    console.log(a * b * c * d);
}

multiply4.delayAny(1500)(2, 3, 4, 5);
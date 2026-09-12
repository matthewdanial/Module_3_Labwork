
//a)
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} is ${twentyCents + tenCents}`); 


let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);
console.log(typeof fixedTwenty);

/*  toFixed() returns a string, not a number, so the + operator joins two strings
as text instead of adding them, so "0.20" + "0.10" becomes "0.200.10" instead of 0.30
 */

//b)
function currencyAddition(float1, float2) {
    return (Math.round(float1 * 100) + Math.round(float2 * 100)) / 100;
}

//c)
function currencyOperation(float1, float2, operation) {
    const factor = 100;
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);

    switch (operation) {
        case '+': return (int1 + int2) / factor;
        case '-': return (int1 - int2) / factor;
        case '*': return (int1 * int2) / (factor * factor);
        case '/': return (int1 / int2);
        default: return NaN;
    }
}

//d)
function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 1;
    for (let i = 0; i < numDecimals; i++) {
        factor = factor * 10;
    }

    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);

    switch (operation) {
        case '+': return (int1 + int2) / factor;
        case '-': return (int1 - int2) / factor;
        case '*': return (int1 * int2) / (factor * factor);
        case '/': return (int1 / int2);
        default: return NaN;
    }
}

//Tests
console.log(0.3 == currencyAddition(0.1, 0.2));        // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+'));  // true

console.log(currencyAddition(0.2, 0.1));               // 0.3
console.log(currencyAddition(1.15, 2.25));             // 3.4

console.log(currencyOperation(0.3, 0.1, '-'), 0.3 - 0.1);
// 0.2  vs  0.19999999999999998
console.log(currencyOperation(0.1, 0.2, '*'), 0.1 * 0.2);
// 0.02  vs  0.020000000000000004
console.log(currencyOperation(0.3, 0.1, '/'), 0.3 / 0.1);
// 3  vs  2.9999999999999996

console.log(currencyOperation(1, 2, '%'));             // NaN - unsupported operation

console.log(currencyOperation2(0.1, 0.2, '+', 2));          // 0.3
console.log(0.3 == currencyOperation2(0.1, 0.2, '+', 2));   // true
console.log(currencyOperation2(0.12345, 0.11111, '+', 5));  // 0.23456
console.log(currencyOperation2(0.3, 0.1, '/', 2));          // 3
console.log(currencyOperation2(0.1, 0.2, '*', 2));          // 0.02

// '+=' means result = result + 'x', so it appends the text since result is a string.

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += a + b < 10 ? 'less than 10' : 'greater than 10';

console.log(result);   // 2 + 3 is less than 10


// Tested with other values:

a = 7; b = 8;
result = `${a} + ${b} is `;
result += a + b < 10 ? 'less than 10' : 'greater than 10';
console.log(result);   // 7 + 8 is greater than 10

a = 5; b = 5;
result = `${a} + ${b} is `;
result += a + b < 10 ? 'less than 10' : 'greater than 10';
console.log(result);   // 5 + 5 is greater than 10, exactly 10 falls to the else, same flaw as the original if/else

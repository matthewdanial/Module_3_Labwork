/*
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four */


/*
Which of the following are not giving the right answer?
addition returns "34" instead of 7
lessThan2 returns true instead of false
*/

/*
Why are they not correct?
Both variables are strings, so + joins them as text instead of adding, 
and < compares them letter by letter instead of numerically — lessThan1 is only correct by luck, 
since single digits sort the same either way*/



let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = Number(three) + Number(four)   //was "34", now 7
let multiplication = three * four
let division = three / four
let subtraction = three - four

let lessThan1 = three < four                  
let lessThan2 = Number(thirty) < Number(four) //was true, now false

console.log(addition)         // 7
console.log(multiplication)   // 12
console.log(division)         // 0.75
console.log(subtraction)      // -1
console.log(lessThan1)        // true
console.log(lessThan2)        // false

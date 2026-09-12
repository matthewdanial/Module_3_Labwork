

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a)
const minutesPassed = (today.getHours() * 60) + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today')

//b)
const secondsPassed = (today.getHours() * 60 * 60) + (today.getMinutes() * 60) + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today')

//c)
const birthday = new Date(YEAR, MONTH, DAY);  

let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {                            
    months = months - 1;
    const lastDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days = days + lastDayOfPrevMonth.getDate();
}
if (months < 0) {                      
    years = years - 1;
    months = months + 12;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`)

//d) 
function daysInBetween(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const difference = date2.getTime() - date1.getTime();
    return Math.round(Math.abs(difference) / msPerDay);
}

//Tests 

console.log(daysInBetween(new Date(2026, 0, 1), new Date(2026, 11, 31)));  // 364
console.log(daysInBetween(new Date(2026, 11, 31), new Date(2026, 0, 1)));  // 364 - order doesn't matter
console.log(daysInBetween(new Date(2026, 8, 1), new Date(2026, 8, 8)));    // 7 - one
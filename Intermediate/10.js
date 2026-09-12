// Module 3 - Intermediate JavaScript
// Q10: Date and time

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a) Total minutes passed so far today
const minutesPassed = (today.getHours() * 60) + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today')

// b) Total seconds passed so far today
const secondsPassed = (today.getHours() * 60 * 60) + (today.getMinutes() * 60) + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today')

// c) Calculate my age in years, months and days
const birthday = new Date(2003, 4, 15);   // CHANGE THIS - month 4 is May, months start at 0

let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {                            // borrow days from the previous month
    months = months - 1;
    const lastDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days = days + lastDayOfPrevMonth.getDate();
}
if (months < 0) {                          // borrow months from the year
    years = years - 1;
    months = months + 12;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`)

// d) Number of days between two dates
function daysInBetween(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const difference = date2.getTime() - date1.getTime();
    return Math.round(Math.abs(difference) / msPerDay);
}

// --- Tests ---

console.log(daysInBetween(new Date(2026, 0, 1), new Date(2026, 11, 31)));  // 364
console.log(daysInBetween(new Date(2026, 11, 31), new Date(2026, 0, 1)));  // 364 - order doesn't matter
console.log(daysInBetween(new Date(2026, 8, 1), new Date(2026, 8, 8)));    // 7 - one week
console.log(daysInBetween(new Date(2024, 1, 1), new Date(2024, 2, 1)));    // 29 - Feb in a leap year
console.log(daysInBetween(birthday, today));                               // days I have been alive
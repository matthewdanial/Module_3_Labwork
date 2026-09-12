
let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

//a)
function sumSalaries(salaries) {
    let total = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        total += salary;
    }
    return total;
}

//b)
function topEarner(salaries) {
    let topName = '';
    let topSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topName = name;
        }
    }
    return topName;
}

//Tests

console.log(sumSalaries(salaries));  // 233000
console.log(topEarner(salaries));    // Christina


console.log(sumSalaries({ "Josh": 60000, "Sam": 90000 }));  // 150000
console.log(topEarner({ "Josh": 60000, "Sam": 90000 }));    // Sam

// Edge case - empty object
console.log(sumSalaries({}));  // 0
console.log(topEarner({}));    // '' - empty string, no one to return
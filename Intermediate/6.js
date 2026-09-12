
function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
}
//tests
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const animals = ['Tiger', 'Gecko', 'Tiger', 'Antelope', 'Gecko', 'Tiger']

console.log(unique(colours)); //['red', 'green', 'blue', 'yellow', 'orange']
console.log(unique(testScores)); //[55, 84, 97, 63, 32, 91, 43]
console.log(unique(animals)); //['Tiger', 'Gecko', 'Antelope']

//edge cases
console.log(unique([])); //[] prints an empty array 
console.log(unique(['1', 1, '1', 1])); //['1', 1] - string '1' and number 1 are different values

//original array is not modified
console.log(colours.length, unique(colours).length); //8 5

// Original - function declaration
function getGreeting(name) {
    return 'Hello ' + name + '!';
}

//a)
const getGreetingExpression = function(name) {
    return 'Hello ' + name + '!';
};

//b)
const getGreetingArrow = (name) => 'Hello ' + name + '!';

// Testing all three
console.log(getGreeting('Matthew'));             
console.log(getGreetingExpression('Matthew'));   
console.log(getGreetingArrow('Matthew'));        
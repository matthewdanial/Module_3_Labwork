
const animals = ['Tiger', 'Giraffe']
console.log(animals)
//['Tiger', 'Giraffe']

//a)
animals.push('Elephant', 'Gecko');
console.log(animals);
//['Tiger', 'Giraffe', 'Elephant', 'Gecko']

//b)
animals.unshift('Antelope', 'Gazelle');
console.log(animals);
//['Antelope', 'Gazelle', 'Tiger', 'Giraffe', 'Elephant', 'Gecko']

//c)
animals.sort();
console.log(animals);
//['Antelope', 'Elephant', 'Gazelle', 'Gecko', 'Giraffe', 'Tiger']

//d)
function replaceMiddleAnimal(newValue) {
    const middle = Math.floor(animals.length / 2);
    animals.splice(middle, 1, newValue);
}

replaceMiddleAnimal('Lion');
console.log(animals);
//['Antelope', 'Elephant', 'Gazelle', 'Lion', 'Giraffe', 'Tiger']

//e)
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
}

console.log(findMatchingAnimals('g')); //['Gazelle', 'Giraffe']
console.log(findMatchingAnimals('G')); //['Gazelle', 'Giraffe'] prints the same result the uppercase is ignored because the function is case insensitive
console.log(findMatchingAnimals('z')); //[] prints an empty array because no animals start with z
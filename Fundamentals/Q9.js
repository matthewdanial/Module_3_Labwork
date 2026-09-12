
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = {name: 'Fluffy', breed: 'Siberian'};

//a)
let moreSports = teamSports;
moreSports.push('Netball');
moreSports.unshift('Rugby');

//b)
let dog2 = dog1;
dog2 = 'Spot';

//c)
let cat2 = cat1;
cat2.name = 'Whiskers';

//d)
console.log(teamSports);
console.log(dog1);
console.log(cat1);

/*d) Why?: objects are stored and copied by refrence,
so moreSports and cat2 point to the same memory location as the originals,
and a variable assigned to an object stores not the object itself but its adress in memory.
Primitive values like strings are always copies as a whole value, so dog2 points to a separate memory location than dog1 and they store in independent values.*/
    
//e)
teamSports = ['Hockey', 'Cricket', 'Volleyball'];
cat1 = {name: 'Fluffy', breed: 'Siberian'};

let moreSportsFixed = [...teamSports];
moreSportsFixed.push('Netball');
moreSportsFixed.unshift('Rugby');

let cat2Fixed = {...cat1};
cat2Fixed.name = 'Whiskers';

console.log(teamSports);
console.log(cat1);
console.log(moreSportsFixed);
console.log(cat2Fixed);
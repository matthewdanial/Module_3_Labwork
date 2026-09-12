const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

//a)
function printProperties(city) {
    for (let key in city) {
        console.log(`${key}: ${city[key]}`);
    }
}

printProperties(sydney);
//name: Sydney
//population: 5121000
//state: NSW
//founded: 26 January 1788
//timezone: Australia/Sydney

//b)
const tokyo = {
    name: 'Tokyo',
    population: 13_960_000,
    country: 'Japan',
    prefecture: 'Tokyo Metropolis',
    isCapital: true
}
console.log('');
printProperties(tokyo);
//name: Tokyo   
//population: 13960000
//country: Japan
//prefecture: Tokyo Metropolis
//isCapital: true
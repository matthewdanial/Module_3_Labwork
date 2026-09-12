const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) and b)
const phoneBookDEF = new Map([
    ['Diana', '0466123456'],
    ['Edward', '0477234567'],
    ['Fiona', '0488345678']
])
console.log(phoneBookDEF);

//c)
phoneBookABC.set('Caroline', '0455999888')
console.log(phoneBookABC.get('Caroline'));
console.log(phoneBookABC.size);

//d) 
function printPhoneBook(contacts) {
    for (let [name, number] of contacts){
        console.log(`${name}: ${number}`);

    }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//e)
const phoneBook = new Map();
for (let [name, number] of phoneBookABC) {
    phoneBook.set(name, number);
}
for (let [name, number] of phoneBookDEF) {
    phoneBook.set(name, number);
}
console.log(phoneBook.size);  // 6
printPhoneBook(phoneBook);

// f)
for (let name of phoneBook.keys()) {
    console.log(name);
}
console.log(Array.from(phoneBook.keys()));
// [ 'Annabelle', 'Barry', 'Caroline', 'Diana', 'Edward', 'Fiona' ]
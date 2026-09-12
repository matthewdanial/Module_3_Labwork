
function ucFirstLetters(str) {
    return str
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' '); 
}

        console.log(ucFirstLetters('los angeles')); // Los Angeles
        console.log(ucFirstLetters('hello')); // Hello
        console.log(ucFirstLetters('this is a test')); // This Is A Test
        console.log(ucFirstLetters('javaScript is fun')); // JavaScript Is Fun

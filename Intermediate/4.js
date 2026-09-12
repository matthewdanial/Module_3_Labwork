//a)
function camelCase(cssProp) {
    return cssProp
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

//b)
function camelCase2(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return result;
}

//c
function camelCase3(cssProp) {
    let result = '';
    for (let word of cssProp.split('-')) {
        result += result === '' ? word : word.charAt(0).toUpperCase() + word.slice(1);
    }
    return result;
}

//Tests
console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display

console.log(camelCase2('margin-left')); // marginLeft
console.log(camelCase2('background-image')); // backgroundImage
console.log(camelCase2('display')); // display

console.log(camelCase3('margin-left')); // marginLeft
console.log(camelCase3('background-image')); // backgroundImage
console.log(camelCase3('display')); // display

console.log(camelCase('border-top-left-radius')); // borderTopLeftRadius
console.log(camelCase2('border-top-left-radius')); // borderTopLeftRadius
console.log(camelCase3('border-top-left-radius')); // borderTopLeftRadius
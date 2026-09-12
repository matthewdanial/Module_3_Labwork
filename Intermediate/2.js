
//a)
function truncate1(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...';
    } else {
        return str;
    }
}

//b)
function truncate2(str, max) {
    return str.length > max ? str.slice(0, max) + '...' : str;
}

//Tests
console.log(truncate1('This text will be truncated if it is too long', 20)); // This text will be trunc...
console.log(truncate1('Short text', 20)); // Short text
console.log(truncate1('Exectly twenty five chars', 25)); // Exectly twenty five chars

console.log(truncate2('This text will be truncated if it is too long', 20)); // This text will be trunc...
console.log(truncate2('Short text', 20)); // Short text


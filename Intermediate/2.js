
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
console.log(truncate1('This text will be truncated if it is too long', 20)); // This text will be tr...
console.log(truncate1('Short text', 20)); // Short text
console.log(truncate1('Exactly twenty five chars', 25)); // Exactly twenty five chars

console.log(truncate2('This text will be truncated if it is too long', 20)); // This text will be tr...
console.log(truncate2('Short text', 20)); // Short text

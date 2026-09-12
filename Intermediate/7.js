
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]

//a)
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found';
}

// b) 
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

// c) 
function addGenre() {
    return books.map(book => ({ ...book, genre: 'classic' }));
}

// d) 
function getTitles(authorInitial) {
    return books
        .filter(book => book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
        .map(book => book.title);
}

// e) 
function latestBook() {
    let latestYear = 0;
    books.forEach(book => {
        latestYear = book.year > latestYear ? book.year : latestYear;
    });
    return books.find(book => book.year === latestYear);
}

//tests

console.log(getBookTitle(3));    // 1984
console.log(getBookTitle(1));    // The Great Gatsby
console.log(getBookTitle(99));   // Book not found - no matching id

console.log(getOldBooks());
// The Great Gatsby (1925), 1984 (1949), Brave New World (1932)

console.log(addGenre());
// all 5 books, each with genre: 'classic' added
console.log(books[0]);
// original book unchanged - no genre property, map returns a new array

console.log(getTitles('G'));  // [ '1984' ] - George Orwell
console.log(getTitles('j'));  // [ 'The Catcher in the Rye' ] - lowercase also works
console.log(getTitles('a'));  // [ 'Brave New World' ] - Aldous Huxley
console.log(getTitles('Z'));  // [] - no matching authors

console.log(latestBook());
// { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
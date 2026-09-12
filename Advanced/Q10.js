// Module 3 Advanced JavaScript - Q10 (fetch with promises and async/await)

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch

// ----- original: .then() / .catch() version -----

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}


// a) the same function using async/await.
// async before a function means it always returns a promise, and is required
// because the function body includes await statements. await makes JavaScript
// wait until each promise settles and returns its result, so the asynchronous
// promise-based behaviour is written using synchronous style code.
async function fetchURLDataAsync(url) {
    let response = await fetch(url);        // waits here as long as the request needs
    if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();           // .json() also returns a promise
}


// b) test both functions with a valid and an invalid URL

const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/todos/notanid';

// the original, consumed with .then() and .catch()
console.log('--- fetchURLData (promises) ---');
fetchURLData(validURL)
    .then(data => console.log('valid URL:', data))
    .catch(error => console.error('valid URL failed:', error.message));

fetchURLData(invalidURL)
    .then(data => console.log('invalid URL:', data))
    .catch(error => console.error('invalid URL failed:', error.message));

// the async version. Since we have synchronous style code and no .catch(),
// we use try...catch for errors instead.
async function testAsyncVersion() {
    console.log('--- fetchURLDataAsync (async/await) ---');
    try {
        let data = await fetchURLDataAsync(validURL);
        console.log('valid URL:', data);
    } catch (error) {
        console.error('valid URL failed:', error.message);
    }

    try {
        let data = await fetchURLDataAsync(invalidURL);
        console.log('invalid URL:', data);
    } catch (error) {
        console.error('invalid URL failed:', error.message);
    }
}
testAsyncVersion();


// c) (Extension) accept an array of URLs and fetch all of them.
// Promise.all accepts an iterable of promises, waits for all of them to resolve,
// and returns an array of their results. If any of the given promises rejects, it
// becomes the error of Promise.all and all other results are ignored.
async function fetchAllURLData(urls) {
    let promises = urls.map(url => fetchURLDataAsync(url));   // an array of promises
    return await Promise.all(promises);
}

async function testFetchAll() {
    console.log('--- fetchAllURLData (Promise.all) ---');

    // all valid - resolves with an array of results
    try {
        let results = await fetchAllURLData([
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'
        ]);
        console.log('all valid:', results);
    } catch (error) {
        console.error('all valid failed:', error.message);
    }

    // one invalid - the whole thing rejects and the other two results are ignored
    try {
        let results = await fetchAllURLData([
            'https://jsonplaceholder.typicode.com/todos/1',
            invalidURL,
            'https://jsonplaceholder.typicode.com/todos/3'
        ]);
        console.log('one invalid:', results);
    } catch (error) {
        console.error('one invalid failed:', error.message);
    }
}
testFetchAll();
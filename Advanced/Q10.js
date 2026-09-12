
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch

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


// a)
async function fetchURLDataAsync(url) {
    let response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
}


// b)
const validURL = 'https://jsonplaceholder.typicode.com/todos/1';
const invalidURL = 'https://jsonplaceholder.typicode.com/todos/notanid';

fetchURLData(validURL)
    .then(data => console.log('valid URL:', data))
    .catch(error => console.error('valid URL failed:', error.message));

fetchURLData(invalidURL)
    .then(data => console.log('invalid URL:', data))
    .catch(error => console.error('invalid URL failed:', error.message));

async function testAsyncVersion() {
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


// c)
async function fetchAllURLData(urls) {
    let promises = urls.map(url => fetchURLDataAsync(url));
    return await Promise.all(promises);
}

async function testFetchAll() {
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
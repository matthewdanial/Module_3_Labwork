// Module 3 Advanced JavaScript - Q9 (promise-based random delay)

// a) b) d) randomDelay - returns a promise that settles after a random delay of
// 1 to 20 seconds. An even delay resolves (success), an odd delay rejects (failure).
// Both callbacks are passed the delay value, so the messages can include it.
function randomDelay() {
    // Promise constructor takes a single argument which is a function, with
    // resolve and reject callback functions as arguments
    return new Promise((resolve, reject) => {
        let seconds = Math.floor(Math.random() * 20) + 1;   // random number from 1 to 20
        let ms = seconds * 1000;
        if (seconds % 2 === 0) {
            setTimeout(() => resolve(seconds), ms);         // even - success
        } else {
            setTimeout(() => reject(seconds), ms);          // odd - failure
        }
    });
}

// c) d) consume the promise by responding to both outcomes when they happen
randomDelay()
    .then((seconds) => console.log(`There appears to have been a delay of ${seconds} seconds.`))
    .catch((seconds) => console.log(`Failed after an odd delay of ${seconds} seconds.`))
    .finally(() => console.log('The wait is over, the promise has settled.'));
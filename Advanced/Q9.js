
//a) b) d)
function randomDelay() {
    return new Promise((resolve, reject) => {
        let seconds = Math.floor(Math.random() * 20) + 1;
        let ms = seconds * 1000;
        if (seconds % 2 === 0) {
            setTimeout(() => resolve(seconds), ms);
        } else {
            setTimeout(() => reject(seconds), ms);
        }
    });
}

//c) d)
randomDelay()
    .finally(() => console.log('Wait is over, promise has settled.'))
    .then((seconds) => console.log(`There appears to have been a delay of ${seconds} seconds.`))
    .catch((seconds) => console.log(`Failed after an odd delay of ${seconds} seconds.`));
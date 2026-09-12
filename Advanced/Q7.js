// Module 3 Advanced JavaScript - Q7 (clock classes)

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}


// a) PrecisionClock - adds a precision parameter, the ms between ticks
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {   // defaults to 1 second if not supplied
        super(prefix);                        // call the constructor of the parent class
        this.precision = precision;           // custom property only for PrecisionClock
    }
    start() {                                 // overrides start in the parent class
        this.display();
        // same as the parent, but uses this.precision instead of a hardcoded 1000
        this.timer = setInterval(() => this.display(), this.precision);
    }
}


// b) AlarmClock - adds a wakeupTime in hh:mm format
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {   // defaults to 07:00 if not supplied
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    display() {                               // overrides display in the parent class
        super.display();                      // call parent display to print the time

        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;

        if (`${hours}:${mins}` === this.wakeupTime) {
            console.log(`${this.prefix} Wake Up!`);
            this.stop();                      // inherited from DigitalClock
        }
    }
}


// ----- tests -----

const myClock = new DigitalClock('my clock:');
myClock.start();
setTimeout(() => myClock.stop(), 5000);       // stop after 5s so the file can finish

const fastClock = new PrecisionClock('fast clock:', 250);   // ticks 4 times a second
fastClock.start();
setTimeout(() => fastClock.stop(), 3000);

const defaultClock = new PrecisionClock('default clock:');  // no precision supplied - 1000ms
defaultClock.start();
setTimeout(() => defaultClock.stop(), 4000);

// an alarm set for 07:00 would take too long to test, so this one is set for the
// start of the next minute - it stops itself when it gets there
let soon = new Date(Date.now() + 60 * 1000);
let [h, m] = [soon.getHours(), soon.getMinutes()];
if (h < 10) h = '0' + h;
if (m < 10) m = '0' + m;

const alarm = new AlarmClock('alarm clock:', `${h}:${m}`);
alarm.start();

const defaultAlarm = new AlarmClock('07:00 alarm:');        // no wakeupTime supplied
console.log('defaultAlarm wakeupTime is ' + defaultAlarm.wakeupTime);
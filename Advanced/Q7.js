
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


// a)
class PrecisionClock extends DigitalClock {
    precision = 1000;

    constructor(prefix, precision) {
        super(prefix);
        if (precision) this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}


// b)
class AlarmClock extends DigitalClock {
    wakeupHours = 7;
    wakeupMins = 0;

    constructor(prefix, wakeupTime) {
        super(prefix);
        if (wakeupTime) {
            let [hours, mins] = wakeupTime.split(':');
            this.wakeupHours = Number(hours);
            this.wakeupMins = Number(mins);
        }
    }
    display() {
        super.display();

        let date = new Date();
        if (date.getHours() === this.wakeupHours && date.getMinutes() === this.wakeupMins) {
            console.log(`${this.prefix} Wake Up!`);
            this.stop();
        }
    }
}


const myClock = new DigitalClock('my clock:');
myClock.start();
setTimeout(() => myClock.stop(), 5000);

const fastClock = new PrecisionClock('fast clock:', 250);
fastClock.start();
setTimeout(() => fastClock.stop(), 3000);

const defaultClock = new PrecisionClock('default clock:');
defaultClock.start();
setTimeout(() => defaultClock.stop(), 4000);

const alarm = new AlarmClock('alarm clock:', '07:00');
alarm.start();
setTimeout(() => alarm.stop(), 5000);

const defaultAlarm = new AlarmClock('07:00 alarm:');
console.log('defaultAlarm wakeupHours is ' + defaultAlarm.wakeupHours);
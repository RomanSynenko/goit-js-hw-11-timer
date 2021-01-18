function addZero(value) {
    return String(value).padStart(2, '0');
};

function formatTime(time) {
    const days = addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = addZero(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs }
};

function moment(time) {
    return formatTime(time)
}
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.refs = {
            dayRef: document.querySelector(`${selector} [data-value='days']`),
            hoursRef: document.querySelector(`${selector} [data-value='hours']`),
            minRef: document.querySelector(`${selector} [data-value='mins']`),
            secsRef: document.querySelector(`${selector} [data-value='secs']`)
        }
        this.timerId = null;
        console.log('')
    }
    start() {
        this.timerId = setInterval(() => {
            const deltaTime = this.targetDate - Date.now()
            const time = moment(deltaTime)
            this.updateInterface(time)
        }, 1000);
    }
    updateInterface({ days, hours, mins, secs }) {
        const { dayRef, hoursRef, minRef, secsRef } = this.refs;
        dayRef.textContent = days;
        hoursRef.textContent = hours;
        minRef.textContent = mins;
        secsRef.textContent = secs;
    }
};

function startTimer(selector, targetDate) {
    const timer = new CountdownTimer({ selector, targetDate })
    timer.start();
}
startTimer('#timer-1', new Date('Jul 17, 2021'));
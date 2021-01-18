const refs = {
    dayRef: document.querySelector(`[data-value='days']`),
    hoursRef: document.querySelector(`[data-value='hours']`),
    minRef: document.querySelector(`[data-value='mins']`),
    secsRef: document.querySelector(`[data-value='secs']`),
    timerRef: document.querySelector('.timer')
}
const { dayRef, hoursRef, minRef, secsRef, timerRef } = refs;

const addZero = (value) => {
    return String(value).padStart(2, '0');
};
const formatTime = (time) => {
    const days = addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = addZero(Math.floor((time % (1000 * 60)) / 1000));
    dayRef.textContent = days;
    hoursRef.textContent = hours;
    minRef.textContent = mins;
    secsRef.textContent = secs;
};
const timerId = (selected) => {
    timerRef.id = selected
};
const startTimer = (selected, targetDate) => {
    timerId(selected)
    setInterval(() => {
        const deltaTime = targetDate - Date.now()
        formatTime(deltaTime)
    }, 1000)

};
startTimer('#timer-2', new Date('Jul 17, 2021'));
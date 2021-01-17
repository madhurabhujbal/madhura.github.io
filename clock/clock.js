
const hand_hr = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');

function tick() {
    const d = new Date();
    //Seconds
    let seconds = d.getSeconds();
    const secInDegrees = (seconds * (360 / 60)) + 90;
    hand_sec.style.transform = `translateY(-50%) rotate(${secInDegrees}deg)`;
    //Minutes
    let minutes = d.getMinutes();
    const minInDegrees = (minutes * (360 / 60)) + 90;
    hand_min.style.transform = `translateY(-50%) rotate(${minInDegrees}deg)`;
    //Hours
    let hours = d.getHours();
    const hoursInDegrees = (hours * (360 / 12)) + (minutes * (30 / 60)) + 90;
    hand_hr.style.transform = `translateY(-50%) rotate(${hoursInDegrees}deg)`;
}
//For ticking the clock, uncomment the two lines below and watch in browser
tick();
setInterval(tick, 1000);
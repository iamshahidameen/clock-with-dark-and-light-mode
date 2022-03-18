/* Js for only clock, mine */

/*
const rootEl = document.querySelectorAll('html');
const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const themeToggle = document.getElementById('toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


themeToggle.addEventListener('click',() => {
    rootEl.forEach((htmlTag) => {
        htmlTag.classList.toggle('dark');
        if(htmlTag.classList.contains('dark')){
            themeToggle.innerText = 'Light Mode';
        } else {
            themeToggle.innerText = 'Dark Mode';
        }
    })
    
});

function setTime(){
    const time = new Date();
    const currentMonth = time.getMonth();
    const currentYear = time.getFullYear();
    const currentHour = time.getHours() * 30;
    const currentMinute = time.getMinutes() * 6;
    const currentSeconds = time.getSeconds() * 6;
    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${currentHour}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${currentMinute}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${currentSeconds}deg)`;
}
setInterval(setTime, 1000); 

*/


const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

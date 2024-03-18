let homeCount = 0;
let guestCount = 0;
let remainingTime = 720;
let timer;
let period = 1
let foulHome = 0;
let foulGuest = 0

const homeEl = document.getElementById('home-el')
const homeTextEl = document.getElementById('home-txt')
const guestTextEl = document.getElementById('guest-txt')
const guestEl = document.getElementById('guest-el')
const timerEl = document.getElementById('timer')
const foulsHomeEl = document.getElementById('fouls-home')
const foulsGuestEl = document.getElementById('fouls-guest')
const periodEl = document.getElementById('period-square-id')
const bonusHomeEl = document.getElementById('bonus-home')
const bonusGuestEl = document.getElementById('bonus-guest')
const posHomeEl = document.getElementById('poss-home')
const posGuesEl = document.getElementById('poss-guest')
const resumeButtonEl = document.getElementById('resume-button')
const pauseButtonEl = document.getElementById('pause-button')

function incrementOneHomeCount(){
    homeCount += 1
    homeEl.textContent = homeCount;
}
function incrementTwoHomeCount(){
    homeCount += 2
    homeEl.textContent = homeCount;
}
function incrementThreeHomeCount(){
    homeCount += 3
    homeEl.textContent = homeCount;
}
function incrementOneGuestCount(){
    guestCount += 1
    guestEl.textContent = guestCount;
}
function incrementTwoGuestCount(){
    guestCount += 2
    guestEl.textContent = guestCount;
}
function incrementThreeGuestCount(){
    guestCount += 3
    guestEl.textContent = guestCount;
}

function newGame(){
    homeCount = 0;
    guestCount = 0;
    period = 1
    foulHome = 0
    foulGuest = 0
    remainingTime = 720
    homeEl.textContent = homeCount;
    guestEl.textContent = guestCount;
    homeTextEl.style.color = '#EEEEEE';
    guestTextEl.style.color = '#EEEEEE'
    periodEl.textContent = period
    foulsHomeEl.textContent = foulHome
    foulsGuestEl.textContent = foulGuest
    timerEl.textContent = secondsToMMSS(remainingTime)
    bonusHomeEl.style.background = 'transparent'
    bonusGuestEl.style.background = 'transparent'
    posHomeEl.style.background = 'transparent'
    posGuesEl.style.background = 'transparent'
}

function whoLeads(){
    if (homeCount > guestCount) {
        homeTextEl.style.color = '#F3B700';
        guestTextEl.style.color = '#EEEEEE'
    }
    else if (guestCount > homeCount) {
        homeTextEl.style.color = '#EEEEEE';
        guestTextEl.style.color = '#F3B700'
    }
    else {
        homeTextEl.style.color = '#EEEEEE';
        guestTextEl.style.color = '#EEEEEE'
    }
}

function init(){
    resumeButtonEl.disabled = true;
    pauseButtonEl.disabled = false;
    timer = setInterval(updateTimer, 1000)
    updateTimer()
}

function bonusHome(){
    if (foulGuest >= 5){
        bonusHomeEl.style.background = '#9AABD8'
    }
}

function bonusGuest(){
    if (foulHome >= 5){
        bonusGuestEl.style.background = '#9AABD8'
    }
}

function secondsToMMSS(seconds) { 
    const minutes = Math.floor(seconds / 60)
    const seconds_left = seconds % 60
    return minutes.toString().padStart(2, '0') + ':' + 
    seconds_left.toString().padStart(2, '0');
}

function updateTimer(){
    remainingTime -= 1;
    if (remainingTime >= 0) {
        timerEl.textContent = secondsToMMSS(remainingTime)
    }else{
        if (period == 4) {
            newGame()
        }else{
            period += 1
            periodEl.textContent = period.toString()
            remainingTime = 720;
            cancelInterval(timer)
            init()
        }
    }
}

function pauseTimer(){
    clearInterval(timer)
    pauseButtonEl.disabled = true;
    resumeButtonEl.disabled = false;
}

function restartTimer(){
    init()
}



function addFoulHome(){
    foulHome += 1
    foulsHomeEl.textContent = foulHome
}

function addFoulGuest(){
    foulGuest += 1
    foulsGuestEl.textContent = foulGuest
}

function setPossessionToHome(){ 
    posHomeEl.style.background = '#9AABD8'
    posGuesEl.style.background = 'transparent'
}

function setPossessionToGuest(){
    posGuesEl.style.background = '#9AABD8'
    posHomeEl.style.background = 'transparent'
}

init()
const START = document.querySelector("#start");
const PAUSE = document.querySelector("#pause");
const RESET =  document.querySelector("#reset");

let timeInMs = 0;
let timer;

/************************************************************************** updateTimer fucntion will update the DOM according to the value calculated form the timeInMs variable
**************************************************************************/

function updateTimer(){
    let sec = Math.floor(timeInMs / 1000) % 60;
    let min = Math.floor(timeInMs / (60 * 1000)) % 60;
    let ms = Math.floor(timeInMs % 1000);

    document.querySelector("#sec").innerText = sec < 10 ? "0" + sec : sec;
    document.querySelector("#min").innerText = min < 10 ? "0" + min : min;
    document.querySelector("#ms").innerText = ms/10 < 10 ? "0" + ms/10 : ms/10;
}

/**************************************************************************
  startTimer fucntion will start the timer and update timeInMs variable every 10ms and call the updateTimer function to update the DOM
**************************************************************************/
function startTimer(){
    timer = setInterval(() => {
        timeInMs += 10;
        updateTimer();
        
    },10);
}

/**************************************************************************
 pauseTimer function will pause the timer
**************************************************************************/
function pauseTimer(){
    clearInterval(timer);
}

/**************************************************************************
 resetTimer function will reset the timer value to its initial state
**************************************************************************/

function resetTimer(){
    pauseTimer();
    timeInMs = 0;
    updateTimer();
}

START.addEventListener("click",startTimer);

PAUSE.addEventListener("click",pauseTimer);

RESET.addEventListener("click",resetTimer);

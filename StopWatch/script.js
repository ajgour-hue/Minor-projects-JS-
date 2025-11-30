
var min5 = document.querySelector('#one');
var min10 = document.querySelector('#two');
var min20 = document.querySelector('#three');
var progressBox = document.querySelector('#box');
var timer = document.querySelector('#timer');
var timeh1 = document.querySelector('#time');
var stop = document.querySelector('#stop');

let interval = null;
let totalTime = 0;
let remainingTime = 0 ;
let min  =0 ;
let sec = 0 ;
let displayMinutes = 0;
displaySeconds = 0 ;


min5.addEventListener('click' , function(){
    
    clearInterval(interval)
    interval = null
    totalTime = 120;
    remainingTime = totalTime;
    min = 2 ;
    sec = 0 ;
    showTimer(min , sec);
    updateProgress();
        interval = setInterval(countDown, 1000);

})

min10.addEventListener('click' , function(){
     clearInterval(interval)
    interval = null
    totalTime = 600 ;
    remainingTime = totalTime;
    min = 10 ;
    sec = 0 ;
    showTimer(min , sec);
    updateProgress();
     if (interval === null && remainingTime > 0) {
        interval = setInterval(countDown, 1000);
    }
})


min20.addEventListener('click' , function(){
     clearInterval(interval)
    interval = null
    totalTime = 1200 ;
    remainingTime = totalTime;
    min = 20 ;
    sec = 0 ;
    showTimer(min , sec);
    updateProgress();
     if (interval === null && remainingTime > 0) {
        interval = setInterval(countDown, 1000);
    }
})


function showTimer(min , sec){
   displayMinutes = (min < 10 ? "0" + min : min);
displaySeconds = (sec < 10 ? "0" + sec : sec);
   timeh1.innerHTML = displayMinutes +":" +displaySeconds ;
}



function countDown(){
    remainingTime -- ;
    min = Math.floor(remainingTime/60);
    sec = remainingTime%60;
    showTimer(min , sec);
    updateProgress();
    if(remainingTime <= 0 ){
        timer.innerHTML = "TimesUp!!";
        timer.style.color = 'red';
         timeh1.innerHTML = "00:00";    
        clearInterval(interval);
        interval = null ;
    }
}


stop.addEventListener('click' , function(){
      

      if(interval != null){
clearInterval(interval);
      interval  = null ;
      stop.innerHTML = 'Resume';
      }
      else{
        interval = setInterval(countDown , 1000);
         stop.innerHTML = 'Stop';
      }
})


function updateProgress() {
    let progress = ((totalTime - remainingTime) / totalTime) * 360;

    progressBox.style.background = `
        conic-gradient(#5a72ff ${progress}deg, #b8c8ff 0deg)
    `;
}

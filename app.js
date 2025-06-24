
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")


function displayTime(){
    let date = new Date()

    // getting hours , min , sec  from date


    let hh = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    let hRotattion = 30*hh + min/2;
    let minRotation = 6*min;
    let secRotation = 6*sec;

    hours.style.transform = `rotate(${hRotattion}deg)`;
    minutes.style.transform = `rotate(${minRotation}deg)`;
    seconds.style.transform = `rotate(${secRotation}deg)`;



}

setInterval(displayTime,1000);


let hrs = document.getElementById("hour2")
let min = document.getElementById("minute2")
let sec =  document.getElementById("second2")




setInterval(function(){
  let currentTime = new Date();

     hrs.innerHTML = currentTime.getHours();
     min.innerHTML = currentTime.getMinutes();
     sec.innerHTML = currentTime.getSeconds();

     if(hrs == 13){
      hrs = 1
     }

      if(hrs == 14){
      hrs = 2
     }

      if(hrs == 15){
      hrs = 3
     }

      if(hrs == 16){
      hrs = 4
     }

      if(hrs == 17){
      hrs = 5
     }

      if(hrs == 18){
      hrs = 6
     }

      if(hrs == 19){
      hrs = 7
     }

      if(hrs == 20){
      hrs = 8
     }

      if(hrs == 21){
      hrs = 9
     }

      if(hrs == 22){
      hrs = 10
     }

      if(hrs == 23){
      hrs = 11
     }

      if(hrs == 24){
      hrs = 12
     }



},1000)
   
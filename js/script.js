let items = document.querySelectorAll("h3")   
const countdownTime = new Date(2045, 11, 4, 0, 0, 0, 0).getTime();

function getCountDown() {
   const presentTime = new Date().getTime();
   const leftTime = countdownTime - presentTime;

/* 1s = 1000ms
   1m =  60s
   1h = 60m
   1d = 24h */
   const day = 864e5;
   const hour = 36e5 ;
   const min = 60000;
   const sec = 1000;

   const leftDay = Math.floor(leftTime / day);
   const leftHours = Math.floor((leftTime % day) / hour);
   const leftMin = Math.floor((leftTime % hour) / min);
   const leftSec = Math.floor((leftTime % min) / sec);

   const values = [leftDay, leftHours, leftMin, leftSec];

   items.forEach((item, index) => item.innerHTML = values[index]);
}

getCountDown();

setInterval(() => getCountDown(), 1000);
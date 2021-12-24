const monthLeft = document.getElementById("monthDiv");
const daysLeft = document.getElementById("daysDiv");
const hoursLeft = document.getElementById("hoursDiv");
const minsLeft = document.getElementById("minsDiv");
const secondsLeft = document.getElementById("secondDiv");

function countDownTilNewEve() {
  const newEve = "1 Jan 2022";
  const newYear = new Date(newEve);
  const currentDate = new Date();

  let tSeconds = (newYear.getTime() - currentDate.getTime()) / 1000;

  let sec = Math.floor(tSeconds) % 60;
  let mins = Math.floor(tSeconds / 60) % 60;
  let hrs = Math.floor(tSeconds / 3600) % 24;
  let days = Math.floor(tSeconds / 3600 / 24);

  monthLeft.innerHTML = 11 - currentDate.getMonth();
  daysLeft.innerHTML = days;
  hoursLeft.innerHTML = hrs;
  minsLeft.innerHTML = mins;
  secondsLeft.innerHTML = sec;
}

countDownTilNewEve();
setInterval(countDownTilNewEve, 1000);

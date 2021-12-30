// TIMER HELPER FUNCTIONS
const calculateTimeLeft = (gameDate) => {
  let currentTime = new Date();
  let diff = gameDate - currentTime;

  let days = diff / 1000 / 60 / 60 / 24;
  let hours = (diff / 1000 / 60 / 60) % 24;
  let mins = (diff / 1000 / 60) % 60;
  let seconds = (diff / 1000) % 60;

  let timeArr = [days, hours, mins, seconds];
  timeArr = truncTimeDigits(timeArr);
  return formatTime(timeArr);
};

// shortens time digits to 2 dec places
const truncTimeDigits = (arr) => {
  return arr.map((time) => Math.trunc(time));
};

// formats time arr to readable format for timer "3D : 5H : 20M : 1S"
const formatTime = (timeArr) => {
  let timeAbbrev = ["D", "H", "M", "S"];

  for (let i = 0; i < timeArr.length; i++) {
    timeArr[i] = timeArr[i] + timeAbbrev[i];
  }

  return timeArr.join(" : ");
};

export { truncTimeDigits, calculateTimeLeft, formatTime };

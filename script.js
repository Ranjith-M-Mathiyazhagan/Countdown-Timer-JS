const countDown = () => {
  const countDate = new Date("Mar 25,2024 14:34:29").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How time works?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = 24 * hour;

  // Calculate the time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // Update the time to the countdown container
  document.querySelector(".day").innerText = `${textDay}`;
  document.querySelector(".hour").innerText = `${textHour}`;
  document.querySelector(".minute").innerText = `${textMinute}`;
  document.querySelector(".second").innerText = `${textSecond}`;

  if (gap < 1000) {
    clearInterval(interval);
    const message = document.querySelector(".message");
    message.style.visibility = "visible";
    message.style.transform = "translateX(5rem)";
  }
};
const interval = setInterval(countDown, 1000);

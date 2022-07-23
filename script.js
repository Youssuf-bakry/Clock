const parent = document.querySelector(".the-frame");
const secArrow = window.getComputedStyle(parent, "::before");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDegrees = (seconds / 60) * 360;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
  parent.style.setProperty("--beforetrans", `${secDegrees + 90}deg`);
  parent.style.setProperty("--mintrans", `${minsDegrees + 90}deg`);
  parent.style.setProperty("--hourtrans", `${hourDegrees + 90}deg`);
}
setInterval(setDate, 1000);

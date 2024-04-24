const clock = document.getElementById("clock");
setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const seconds = date.getMinutes().toString().padStart(2, 0);
  const minutes = date.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${seconds}:${minutes} ${meridiem}`;
  clock.textContent = time;
}, 1000);

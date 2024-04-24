const clock = document.getElementById("clock");
setInterval(() => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const seconds = date.getMinutes().toString().padStart(2, 0);
  const minutes = date.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${seconds}:${minutes}`;
  clock.textContent = time;
}, 1000);

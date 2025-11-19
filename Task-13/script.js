let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let pbar = document.querySelector("#pbar");
let done = document.querySelector("#done");
let count = 0;

btn.addEventListener("click", function () {
  count = 0;
  pbar.style.width = "0%";
  h1.textContent = "0%";

  btn.style.pointerEvents = "none";
  btn.style.opacity = "0.6";

  const interval = setInterval(() => {
    count++;
    pbar.style.width = `${count}%`;
    h1.textContent = `${count}%`;

    if (h1.textContent == `${100}%`) {
      clearInterval(interval);
      btn.textContent = "Downloaded";
      done.style.display = "block";
    }
  }, 100);
});

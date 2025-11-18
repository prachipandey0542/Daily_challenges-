let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let arr = [
  "Love from JS.",
  "Happy Sheryians..",
  "Good Vibes Only",
  "Stay Happy Always.",
  "Little Things Matter.",
  "Grateful, Happy, Blessed.",
  "Grateful and happy.",
  "Living the dream.",
  "Joy in the journey.",
  "Happiness Looks Good.",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");

  let rot = Math.random() * 360;
  let scl = Math.random() * 3;
  let x = Math.random() * 80;
  let y = Math.random() * 80;

  h1.style.position = "absolute";
  h1.style.top = `${y}%`;
  h1.style.left = `${x}%`;
  h1.style.rotate = `${rot}deg`;
  h1.style.scale = scl;
  h1.style.color = "white";

  let text = Math.floor(Math.random() * 10);
  h1.innerHTML = arr[text];

  document.body.appendChild(h1);
});

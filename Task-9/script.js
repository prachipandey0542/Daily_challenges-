let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

let h1 = document.querySelector("#box h1");

let arr = [
  "Happiness is a choice.",
  "Smile big, laugh often.",
  "Happiness looks good on you.",
  "Dreams do not work unless you do.",
  "Progress, not perfection.",
  "Smiling for no reason.",
  "Grateful and happy.",
  "Living the dream.",
  "Joy in the journey.",
  "Choose joy, then conquer the day.",
];

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  let text = Math.floor(Math.random() * 10);
  h1.innerHTML = arr[text];
});

let sound = {
  a: "./assets/28.mp3",
  b: "./assets/29.mp3",
  c: "./assets/30.mp3",
  d: "./assets/31.mp3",
  e: "./assets/32.mp3",
  f: "./assets/33.mp3",
  g: "./assets/34.mp3",
  h: "./assets/35.mp3",
  i: "./assets/36.mp3",
  j: "./assets/37.mp3",
  k: "./assets/38.mp3",
  l: "./assets/39.mp3",
  m: "./assets/40.mp3",
  n: "./assets/41.mp3",
  o: "./assets/42.mp3",
  p: "./assets/43.mp3",
  q: "./assets/44.mp3",
  r: "./assets/45.mp3",
  s: "./assets/46.mp3",
  t: "./assets/47.mp3",
  u: "./assets/48.mp3",
  v: "./assets/49.mp3",
  w: "./assets/50.mp3",
  x: "./assets/40.mp3",
};

var key = document.querySelectorAll(".btn-w");
var kky = document.querySelectorAll(".btn-b");

key.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var text = elem.innerHTML.toLowerCase();
    var audio = new Audio(sound[text]);
    audio.play();
  });
});

kky.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var text = elem.innerHTML.toLowerCase();
    var audio = new Audio(sound[text]);
    audio.play();
  });
});

document.addEventListener("keydown", function (eve) {
  var value = eve.key.toLowerCase();
  if (sound[value]) {
    let audio = new Audio(sound[value]);
    audio.play();
  }
});

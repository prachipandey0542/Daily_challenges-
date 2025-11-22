let sound = {
  a: "./sound/28.mp3",
  b: "./sound/29.mp3",
  c: "./sound/30.mp3",
  d: "./sound/31.mp3",
  e: "./sound/32.mp3",
  f: "./sound/33.mp3",
  g: "./sound/34.mp3",
  h: "./sound/35.mp3",
  i: "./sound/36.mp3",
  j: "./sound/37.mp3",
  k: "./sound/38.mp3",
  l: "./sound/39.mp3",
  m: "./sound/40.mp3",
  n: "./sound/41.mp3",
  o: "./sound/42.mp3",
  p: "./sound/43.mp3",
  q: "./sound/44.mp3",
  r: "./sound/45.mp3",
  s: "./sound/46.mp3",
  t: "./sound/47.mp3",
  u: "./sound/48.mp3",
  v: "./sound/49.mp3",
  w: "./sound/50.mp3",
  x: "./sound/40.mp3",
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

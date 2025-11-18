let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let main = document.querySelector("main");
let h1 = document.querySelector("#tm");
let dtl = document.querySelector("#dtl");
let fullname = document.getElementById("fullname");
let tro = document.getElementById("trophy");
let cap = document.getElementById("captain");

let arr = [
  {
    team: "RCB",
    primary: "#484e5dff",
    secondary: "#1b9be1ff",
    full_name: "Royal Challengers Bangalore",
    trophy: 8,
    captain: "Virat Kohli",
  },
  {
    team: "KKR",
    primary: "#815854",
    secondary: "purple",
    full_name: "Kolkata Knight Riders",
    trophy: 2,
    captain: "Shubman Gill",
  },
  {
    team: "MI",
    primary: "#A4193D",
    secondary: "#d3892dff",
    full_name: "Mumbai Indians",
    trophy: 5,
    captain: "Rohit Sharma",
  },
  {
    team: "CSK",
    primary: "#1AAFBC",
    secondary: "#80634C",
    full_name: "Chennai Super Kings",
    trophy: 4,
    captain: "MS Dhoni",
  },
  {
    team: "SRH",
    primary: "#5F4B8B",
    secondary: "#E69A8D",
    full_name: "Sunrisers Hyderabad",
    trophy: 1,
    captain: "Aiden Markram",
  },
  {
    team: "DC",
    primary: "#00203F",
    secondary: "#ADEFD1",
    full_name: "Delhi Capitals",
    trophy: 0,
    captain: "David Warner",
  },
  {
    team: "PBKS",
    primary: "#7B9ACC",
    secondary: "black",
    full_name: "Punjab Kings",
    trophy: 0,
    captain: "Shikhar Dhawan",
  },
  {
    team: "LSG",
    primary: "#603F83",
    secondary: "crimson",
    full_name: "Lucknow Super Giants",
    trophy: 0,
    captain: "KL Rahul",
  },
  {
    team: "RR",
    primary: "#2D2926",
    secondary: "#ED6F63",
    full_name: "Rajasthan Royals",
    trophy: 1,
    captain: "Sanju Samson",
  },
  {
    team: "GT",
    primary: "Dark Green",
    secondary: "Black",
    full_name: "Gujarat Titans",
    trophy: 1,
    captain: "Hardik Pandya",
  },
];

btn.addEventListener("click", function () {
  let winner = arr[Math.floor(Math.random() * arr.length)];
  h1.innerHTML = winner.team;

  box.style.backgroundColor = winner.secondary;
  main.style.backgroundColor = winner.primary;

  fullname.innerHTML = winner.full_name;
  tro.innerHTML = "Trophy : " + winner.trophy;
  cap.innerHTML = "Captain : " + winner.captain;

  dtl.style.display = "block";
});

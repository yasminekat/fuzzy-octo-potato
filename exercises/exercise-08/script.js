/* 
Instructions: when a user clicks on one of the colored dots, the background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 
Hint: Classes for each color have already been defined in the CSS tab.
*/
let text = document.querySelector("body");

// 1 -- Select the parent of the items you want to click
let circles = document.querySelector("ul");
console.log(circles);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.
function changeBackgroundColor(event) {
  console.log(event.target);
}

// 2 -- Add an event listener to each circle
circles.addEventListener("click", changeBackgroundColor);



let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");

function redScheme() {
  document.body.style.backgroundColor = "#ff0000";
  document.getElementById("text").style.color = "#ff0000";
}

function greenScheme() {
  document.body.style.backgroundColor = "#008000";
  document.getElementById("text").style.color = "#008000";
}

function blueScheme() {
  document.body.style.backgroundColor = "#0000ff";
  document.getElementById("text").style.color = "#0000ff";
}

function yellowScheme() {
  document.body.style.backgroundColor = "#ffff00";
  document.getElementById("text").style.color = "#ffff00";
}

redButton.addEventListener("click", redScheme);
greenButton.addEventListener("click", greenScheme);
blueButton.addEventListener("click", blueScheme);
yellowButton.addEventListener("click", yellowScheme);
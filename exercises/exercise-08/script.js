/* 
Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 
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



let greyButton = document.getElementById("greyButton");
let greenButton = document.getElementById("greenButton");
let pinkButton = document.getElementById("pinkButton");
let yellowButton = document.getElementById("yellowButton");

function greyScheme() {
  document.body.style.backgroundColor = "#C8C8C8";
  document.getElementById("text").style.color = "#000000";
}
function greenScheme() {
  document.body.style.backgroundColor = "#E8FF66";
  document.getElementById("text").style.color = "#FB0094";
}
function pinkScheme() {
  document.body.style.backgroundColor = "#FB0094";
  document.getElementById("text").style.color = "#E8FF66";
}
function yellowScheme() {
  document.body.style.backgroundColor = "#FFC800";
  document.getElementById("text").style.color = "#000000";
}

greyButton.addEventListener("click", greyScheme);
greenButton.addEventListener("click", greenScheme);
pinkButton.addEventListener("click", pinkScheme);
yellowButton.addEventListener("click", yellowScheme);
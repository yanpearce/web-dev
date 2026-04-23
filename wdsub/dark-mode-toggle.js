let body = document.getElementById("body");

let darkMode = document.getElementById("toggle");

let info = document.getElementById("DM-info");

//body.style.backgroundColor = "black";
//body.style.color = "white";

//body.style.backgroundColor = "white";
//body.style.color = "black";

//
let isModeOff = true;

function toggleDM(event) {
  //change background and text color to black, else white
if (isModeOff) body.style.backgroundColor = "white" ;
  
if (isModeOff) body.style.color = "black";
  
if (isModeOff) info.innerText = "Dark Mode off";
  
else body.style.backgroundColor = "black",

body.style.color = "white",
 
info.innerText = "Dark Mode on";
 
  //change text to "dark mode on", else "dark mode off"
  
  //flip the switch
isModeOff = !isModeOff;
}

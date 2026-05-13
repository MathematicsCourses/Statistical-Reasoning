/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    www.precalculus.appspot.com/discussions.html
*/

"use strict";

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  

// Solutions to the Questions
function solutions(solution) {
  var e = document.getElementById(solution);
  if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
  else e.style.display = 'block';
}


// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
  else e.style.display = 'block';
}
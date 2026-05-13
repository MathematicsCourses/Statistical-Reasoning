/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.appspot.com
    https://mathematicscourses.github.io/Statistical-Reasoning/
    https://mathematicscourses.github.io/Statistical-Reasoning/GradesCalculators.html
*/

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
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

("use strict");

/* 
  MTH 155
  Given: Student MLS scores
  To Calculate: the current MLS grade and the cumulative MLS grade
*/

document.getElementById("gradeMLS").addEventListener("submit", gradeMLS);

function gradeMLS(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightOneOne = parseFloat(document.getElementById("weightOneOne").value, 10) || 0,
    scoreOneOne = parseFloat(document.getElementById("scoreOneOne").value, 10) || 0,
    weightedScoreOneOne,
    weightOneTwo = +parseFloat(document.getElementById("weightOneTwo").value, 10) || 0,
    scoreOneTwo = +parseFloat(document.getElementById("scoreOneTwo").value, 10) || 0,
    weightedScoreOneTwo,
    weightOneThree = +parseFloat(document.getElementById("weightOneThree").value, 10) || 0,
    scoreOneThree = +parseFloat(document.getElementById("scoreOneThree").value, 10) || 0,
    weightedScoreOneThree,
    weightOneFour = +parseFloat(document.getElementById("weightOneFour").value, 10) || 0,
    scoreOneFour = +parseFloat(document.getElementById("scoreOneFour").value, 10) || 0,
    weightedScoreOneFour,
    weightOneFive = +parseFloat(document.getElementById("weightOneFive").value, 10) || 0,
    scoreOneFive = +parseFloat(document.getElementById("scoreOneFive").value, 10) || 0,
    weightedScoreOneFive,
    weightTwoOneTwoTwo1st =
      +parseFloat(document.getElementById("weightTwoOneTwoTwo1st").value, 10) || 0,
    scoreTwoOneTwoTwo1st =
      +parseFloat(document.getElementById("scoreTwoOneTwoTwo1st").value, 10) || 0,
    weightedScoreTwoOneTwoTwo1st,
    weightTwoOneTwoTwo2nd =
      +parseFloat(document.getElementById("weightTwoOneTwoTwo2nd").value, 10) || 0,
    scoreTwoOneTwoTwo2nd =
      +parseFloat(document.getElementById("scoreTwoOneTwoTwo2nd").value, 10) || 0,
    weightedScoreTwoOneTwoTwo2nd,
    weightTwoThreeTwoFour =
      +parseFloat(document.getElementById("weightTwoThreeTwoFour").value, 10) || 0,
    scoreTwoThreeTwoFour =
      +parseFloat(document.getElementById("scoreTwoThreeTwoFour").value, 10) || 0,
    weightedScoreTwoThreeTwoFour,
    weightTwoFive = +parseFloat(document.getElementById("weightTwoFive").value, 10) || 0,
    scoreTwoFive = +parseFloat(document.getElementById("scoreTwoFive").value, 10) || 0,
    weightedScoreTwoFive,
    weightThreeOne1st = +parseFloat(document.getElementById("weightThreeOne1st").value, 10) || 0,
    scoreThreeOne1st = +parseFloat(document.getElementById("scoreThreeOne1st").value, 10) || 0,
    weightedScoreThreeOne1st,
    weightThreeOne2nd = +parseFloat(document.getElementById("weightThreeOne2nd").value, 10) || 0,
    scoreThreeOne2nd = +parseFloat(document.getElementById("scoreThreeOne2nd").value, 10) || 0,
    weightedScoreThreeOne2nd,
    weightThreeTwo = +parseFloat(document.getElementById("weightThreeTwo").value, 10) || 0,
    scoreThreeTwo = +parseFloat(document.getElementById("scoreThreeTwo").value, 10) || 0,
    weightedScoreThreeTwo,
    weightThreeThree = +parseFloat(document.getElementById("weightThreeThree").value, 10) || 0,
    scoreThreeThree = +parseFloat(document.getElementById("scoreThreeThree").value, 10) || 0,
    weightedScoreThreeThree,
    weightThreeFour = +parseFloat(document.getElementById("weightThreeFour").value, 10) || 0,
    scoreThreeFour = +parseFloat(document.getElementById("scoreThreeFour").value, 10) || 0,
    weightedScoreThreeFour,
    weightThreeFive = +parseFloat(document.getElementById("weightThreeFive").value, 10) || 0,
    scoreThreeFive = +parseFloat(document.getElementById("scoreThreeFive").value, 10) || 0,
    weightedScoreThreeFive,
    weightFourOne = +parseFloat(document.getElementById("weightFourOne").value, 10) || 0,
    scoreFourOne = +parseFloat(document.getElementById("scoreFourOne").value, 10) || 0,
    weightedScoreFourOne,
    weightFourTwo = +parseFloat(document.getElementById("weightFourTwo").value, 10) || 0,
    scoreFourTwo = +parseFloat(document.getElementById("scoreFourTwo").value, 10) || 0,
    weightedScoreFourTwo,
    weightFourThree = +parseFloat(document.getElementById("weightFourThree").value, 10) || 0,
    scoreFourThree = +parseFloat(document.getElementById("scoreFourThree").value, 10) || 0,
    weightedScoreFourThree,
    weightFourFour = +parseFloat(document.getElementById("weightFourFour").value, 10) || 0,
    scoreFourFour = +parseFloat(document.getElementById("scoreFourFour").value, 10) || 0,
    weightedScoreFourFour,
    weightFiveOne = +parseFloat(document.getElementById("weightFiveOne").value, 10) || 0,
    scoreFiveOne = +parseFloat(document.getElementById("scoreFiveOne").value, 10) || 0,
    weightedScoreFiveOne,
    weightFiveTwo1st = +parseFloat(document.getElementById("weightFiveTwo1st").value, 10) || 0,
    scoreFiveTwo1st = +parseFloat(document.getElementById("scoreFiveTwo1st").value, 10) || 0,
    weightedScoreFiveTwo1st,
    weightFiveTwo2nd = +parseFloat(document.getElementById("weightFiveTwo2nd").value, 10) || 0,
    scoreFiveTwo2nd = +parseFloat(document.getElementById("scoreFiveTwo2nd").value, 10) || 0,
    weightedScoreFiveTwo2nd,
    weightFiveThree = +parseFloat(document.getElementById("weightFiveThree").value, 10) || 0,
    scoreFiveThree = +parseFloat(document.getElementById("scoreFiveThree").value, 10) || 0,
    weightedScoreFiveThree,
    weightFiveFour = +parseFloat(document.getElementById("weightFiveFour").value, 10) || 0,
    scoreFiveFour = +parseFloat(document.getElementById("scoreFiveFour").value, 10) || 0,
    weightedScoreFiveFour,
    weightSixOne = +parseFloat(document.getElementById("weightSixOne").value, 10) || 0,
    scoreSixOne = +parseFloat(document.getElementById("scoreSixOne").value, 10) || 0,
    weightedScoreSixOne,
    weightSixTwo1st = +parseFloat(document.getElementById("weightSixTwo1st").value, 10) || 0,
    scoreSixTwo1st = +parseFloat(document.getElementById("scoreSixTwo1st").value, 10) || 0,
    weightedScoreSixTwo1st,
    weightSixTwo2nd = +parseFloat(document.getElementById("weightSixTwo2nd").value, 10) || 0,
    scoreSixTwo2nd = +parseFloat(document.getElementById("scoreSixTwo2nd").value, 10) || 0,
    weightedScoreSixTwo2nd,
    weightSevenOne1st = +parseFloat(document.getElementById("weightSevenOne1st").value, 10) || 0,
    scoreSevenOne1st = +parseFloat(document.getElementById("scoreSevenOne1st").value, 10) || 0,
    weightedScoreSevenOne1st,
    weightSevenOne2nd = +parseFloat(document.getElementById("weightSevenOne2nd").value, 10) || 0,
    scoreSevenOne2nd = +parseFloat(document.getElementById("scoreSevenOne2nd").value, 10) || 0,
    weightedScoreSevenOne2nd,
    weightSevenTwo = +parseFloat(document.getElementById("weightSevenTwo").value, 10) || 0,
    scoreSevenTwo = +parseFloat(document.getElementById("scoreSevenTwo").value, 10) || 0,
    weightedScoreSevenTwo,
    weightSevenThree = +parseFloat(document.getElementById("weightSevenThree").value, 10) || 0,
    scoreSevenThree = +parseFloat(document.getElementById("scoreSevenThree").value, 10) || 0,
    weightedScoreSevenThree,
    weightSevenFour = +parseFloat(document.getElementById("weightSevenFour").value, 10) || 0,
    scoreSevenFour = +parseFloat(document.getElementById("scoreSevenFour").value, 10) || 0,
    weightedScoreSevenFour,
    weightEightOne = +parseFloat(document.getElementById("weightEightOne").value, 10) || 0,
    scoreEightOne = +parseFloat(document.getElementById("scoreEightOne").value, 10) || 0,
    weightedScoreEightOne,
    weightEightTwo = +parseFloat(document.getElementById("weightEightTwo").value, 10) || 0,
    scoreEightTwo = +parseFloat(document.getElementById("scoreEightTwo").value, 10) || 0,
    weightedScoreEightTwo,
    weightEightThree = +parseFloat(document.getElementById("weightEightThree").value, 10) || 0,
    scoreEightThree = +parseFloat(document.getElementById("scoreEightThree").value, 10) || 0,
    weightedScoreEightThree,
    weightNineOne = +parseFloat(document.getElementById("weightNineOne").value, 10) || 0,
    scoreNineOne = +parseFloat(document.getElementById("scoreNineOne").value, 10) || 0,
    weightedScoreNineOne,
    weightNineTwo = +parseFloat(document.getElementById("weightNineTwo").value, 10) || 0,
    scoreNineTwo = +parseFloat(document.getElementById("scoreNineTwo").value, 10) || 0,
    weightedScoreNineTwo,
    weightNineThree = +parseFloat(document.getElementById("weightNineThree").value, 10) || 0,
    scoreNineThree = +parseFloat(document.getElementById("scoreNineThree").value, 10) || 0,
    weightedScoreNineThree,
    weightNineFour = +parseFloat(document.getElementById("weightNineFour").value, 10) || 0,
    scoreNineFour = +parseFloat(document.getElementById("scoreNineFour").value, 10) || 0,
    weightedScoreNineFour,
    weightTenOne = +parseFloat(document.getElementById("weightTenOne").value, 10) || 0,
    scoreTenOne = +parseFloat(document.getElementById("scoreTenOne").value, 10) || 0,
    weightedScoreTenOne,
    weightTenTwo = +parseFloat(document.getElementById("weightTenTwo").value, 10) || 0,
    scoreTenTwo = +parseFloat(document.getElementById("scoreTenTwo").value, 10) || 0,
    weightedScoreTenTwo,
    sumWeightsMLS,
    sumWeightedScoresMLS,
    currentGradeMLS,
    cumulativeGradeMLS;

  weightedScoreOneOne = weightOneOne * scoreOneOne;
  document.getElementById("weightedScoreOneOne").value = weightedScoreOneOne;

  weightedScoreOneTwo = weightOneTwo * scoreOneTwo;
  document.getElementById("weightedScoreOneTwo").value = weightedScoreOneTwo;

  weightedScoreOneThree = weightOneThree * scoreOneThree;
  document.getElementById("weightedScoreOneThree").value = weightedScoreOneThree;

  weightedScoreOneFour = weightOneFour * scoreOneFour;
  document.getElementById("weightedScoreOneFour").value = weightedScoreOneFour;

  weightedScoreOneFive = weightOneFive * scoreOneFive;
  document.getElementById("weightedScoreOneFive").value = weightedScoreOneFive;

  weightedScoreTwoOneTwoTwo1st = weightTwoOneTwoTwo1st * scoreTwoOneTwoTwo1st;
  document.getElementById("weightedScoreTwoOneTwoTwo1st").value = weightedScoreTwoOneTwoTwo1st;

  weightedScoreTwoOneTwoTwo2nd = weightTwoOneTwoTwo2nd * scoreTwoOneTwoTwo2nd;
  document.getElementById("weightedScoreTwoOneTwoTwo2nd").value = weightedScoreTwoOneTwoTwo2nd;

  weightedScoreTwoThreeTwoFour = weightTwoThreeTwoFour * scoreTwoThreeTwoFour;
  document.getElementById("weightedScoreTwoThreeTwoFour").value = weightedScoreTwoThreeTwoFour;

  weightedScoreTwoFive = weightTwoFive * scoreTwoFive;
  document.getElementById("weightedScoreTwoFive").value = weightedScoreTwoFive;

  weightedScoreThreeOne1st = weightThreeOne1st * scoreThreeOne1st;
  document.getElementById("weightedScoreThreeOne1st").value = weightedScoreThreeOne1st;

  weightedScoreThreeOne2nd = weightThreeOne2nd * scoreThreeOne2nd;
  document.getElementById("weightedScoreThreeOne2nd").value = weightedScoreThreeOne2nd;

  weightedScoreThreeTwo = weightThreeTwo * scoreThreeTwo;
  document.getElementById("weightedScoreThreeTwo").value = weightedScoreThreeTwo;

  weightedScoreThreeThree = weightThreeThree * scoreThreeThree;
  document.getElementById("weightedScoreThreeThree").value = weightedScoreThreeThree;

  weightedScoreThreeFour = weightThreeFour * scoreThreeFour;
  document.getElementById("weightedScoreThreeFour").value = weightedScoreThreeFour;

  weightedScoreThreeFive = weightThreeFive * scoreThreeFive;
  document.getElementById("weightedScoreThreeFive").value = weightedScoreThreeFive;

  weightedScoreFourOne = weightFourOne * scoreFourOne;
  document.getElementById("weightedScoreFourOne").value = weightedScoreFourOne;

  weightedScoreFourTwo = weightFourTwo * scoreFourTwo;
  document.getElementById("weightedScoreFourTwo").value = weightedScoreFourTwo;

  weightedScoreFourThree = weightFourThree * scoreFourThree;
  document.getElementById("weightedScoreFourThree").value = weightedScoreFourThree;

  weightedScoreFourFour = weightFourFour * scoreFourFour;
  document.getElementById("weightedScoreFourFour").value = weightedScoreFourFour;

  weightedScoreFiveOne = weightFiveOne * scoreFiveOne;
  document.getElementById("weightedScoreFiveOne").value = weightedScoreFiveOne;

  weightedScoreFiveTwo1st = weightFiveTwo1st * scoreFiveTwo1st;
  document.getElementById("weightedScoreFiveTwo1st").value = weightedScoreFiveTwo1st;

  weightedScoreFiveTwo2nd = weightFiveTwo2nd * scoreFiveTwo2nd;
  document.getElementById("weightedScoreFiveTwo2nd").value = weightedScoreFiveTwo2nd;

  weightedScoreFiveThree = weightFiveThree * scoreFiveThree;
  document.getElementById("weightedScoreFiveThree").value = weightedScoreFiveThree;

  weightedScoreFiveFour = weightFiveFour * scoreFiveFour;
  document.getElementById("weightedScoreFiveFour").value = weightedScoreFiveFour;

  weightedScoreSixOne = weightSixOne * scoreSixOne;
  document.getElementById("weightedScoreSixOne").value = weightedScoreSixOne;

  weightedScoreSixTwo1st = weightSixTwo1st * scoreSixTwo1st;
  document.getElementById("weightedScoreSixTwo1st").value = weightedScoreSixTwo1st;

  weightedScoreSixTwo2nd = weightSixTwo2nd * scoreSixTwo2nd;
  document.getElementById("weightedScoreSixTwo2nd").value = weightedScoreSixTwo2nd;

  weightedScoreSevenOne1st = weightSevenOne1st * scoreSevenOne1st;
  document.getElementById("weightedScoreSevenOne1st").value = weightedScoreSevenOne1st;

  weightedScoreSevenOne2nd = weightSevenOne2nd * scoreSevenOne2nd;
  document.getElementById("weightedScoreSevenOne2nd").value = weightedScoreSevenOne2nd;

  weightedScoreSevenTwo = weightSevenTwo * scoreSevenTwo;
  document.getElementById("weightedScoreSevenTwo").value = weightedScoreSevenTwo;

  weightedScoreSevenThree = weightSevenThree * scoreSevenThree;
  document.getElementById("weightedScoreSevenThree").value = weightedScoreSevenThree;

  weightedScoreSevenFour = weightSevenFour * scoreSevenFour;
  document.getElementById("weightedScoreSevenFour").value = weightedScoreSevenFour;

  weightedScoreEightOne = weightEightOne * scoreEightOne;
  document.getElementById("weightedScoreEightOne").value = weightedScoreEightOne;

  weightedScoreEightTwo = weightEightTwo * scoreEightTwo;
  document.getElementById("weightedScoreEightTwo").value = weightedScoreEightTwo;

  weightedScoreEightThree = weightEightThree * scoreEightThree;
  document.getElementById("weightedScoreEightThree").value = weightedScoreEightThree;

  weightedScoreNineOne = weightNineOne * scoreNineOne;
  document.getElementById("weightedScoreNineOne").value = weightedScoreNineOne;

  weightedScoreNineTwo = weightNineTwo * scoreNineTwo;
  document.getElementById("weightedScoreNineTwo").value = weightedScoreNineTwo;

  weightedScoreNineThree = weightNineThree * scoreNineThree;
  document.getElementById("weightedScoreNineThree").value = weightedScoreNineThree;

  weightedScoreNineFour = weightNineFour * scoreNineFour;
  document.getElementById("weightedScoreNineFour").value = weightedScoreNineFour;

  weightedScoreTenOne = weightTenOne * scoreTenOne;
  document.getElementById("weightedScoreTenOne").value = weightedScoreTenOne;

  weightedScoreTenTwo = weightTenTwo * scoreTenTwo;
  document.getElementById("weightedScoreTenTwo").value = weightedScoreTenTwo;

  sumWeightsMLS =
    weightOneOne +
    weightOneTwo +
    weightOneThree +
    weightOneFour +
    weightOneFive +
    weightTwoOneTwoTwo1st +
    weightTwoOneTwoTwo2nd +
    weightTwoThreeTwoFour +
    weightTwoFive +
    weightThreeOne1st +
    weightThreeOne2nd +
    weightThreeTwo +
    weightThreeThree +
    weightThreeFour +
    weightThreeFive +
    weightFourOne +
    weightFourTwo +
    weightFourThree +
    weightFourFour +
    weightFiveOne +
    weightFiveTwo1st +
    weightFiveTwo2nd +
    weightFiveThree +
    weightFiveFour +
    weightSixOne +
    weightSixTwo1st +
    weightSixTwo2nd +
    weightSevenOne1st +
    weightSevenOne2nd +
    weightSevenTwo +
    weightSevenThree +
    weightSevenFour +
    weightEightOne +
    weightEightTwo +
    weightEightThree +
    weightNineOne +
    weightNineTwo +
    weightNineThree +
    weightNineFour +
    weightTenOne +
    weightTenTwo;

  document.getElementById("sumWeightsMLS").value = sumWeightsMLS;

  sumWeightedScoresMLS =
    weightedScoreOneOne +
    weightedScoreOneTwo +
    weightedScoreOneThree +
    weightedScoreOneFour +
    weightedScoreOneFive +
    weightedScoreTwoOneTwoTwo1st +
    weightedScoreTwoOneTwoTwo2nd +
    weightedScoreTwoThreeTwoFour +
    weightedScoreTwoFive +
    weightedScoreThreeOne1st +
    weightedScoreThreeOne2nd +
    weightedScoreThreeTwo +
    weightedScoreThreeThree +
    weightedScoreThreeFour +
    weightedScoreThreeFive +
    weightedScoreFourOne +
    weightedScoreFourTwo +
    weightedScoreFourThree +
    weightedScoreFourFour +
    weightedScoreFiveOne +
    weightedScoreFiveTwo1st +
    weightedScoreFiveTwo2nd +
    weightedScoreFiveThree +
    weightedScoreFiveFour +
    weightedScoreSixOne +
    weightedScoreSixTwo1st +
    weightedScoreSixTwo2nd +
    weightedScoreSevenOne1st +
    weightedScoreSevenOne2nd +
    weightedScoreSevenTwo +
    weightedScoreSevenThree +
    weightedScoreSevenFour +
    weightedScoreEightOne +
    weightedScoreEightTwo +
    weightedScoreEightThree +
    weightedScoreNineOne +
    weightedScoreNineTwo +
    weightedScoreNineThree +
    weightedScoreNineFour +
    weightedScoreTenOne +
    weightedScoreTenTwo;

  document.getElementById("sumWeightedScoresMLS").value = sumWeightedScoresMLS;

  currentGradeMLS = sumWeightedScoresMLS / sumWeightsMLS;

  document.getElementById("currentGradeMLS").value = currentGradeMLS;

  cumulativeGradeMLS = sumWeightedScoresMLS / 100;

  document.getElementById("cumulativeGradeMLS").value = cumulativeGradeMLS;
}
// End MTH 155 MLS Grade Calculations

/* 
  MTH 155
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightMLS = parseFloat(document.getElementById("weightMLS").value, 10) || 0,
    scoreMLS = parseFloat(document.getElementById("scoreMLS").value, 10) || 0,
    weightedScoreMLS,
    weightTest1 = +parseFloat(document.getElementById("weightTest1").value, 10) || 0,
    scoreTest1 = +parseFloat(document.getElementById("scoreTest1").value, 10) || 0,
    weightedScoreTest1,
    weightTest2 = +parseFloat(document.getElementById("weightTest2").value, 10) || 0,
    scoreTest2 = +parseFloat(document.getElementById("scoreTest2").value, 10) || 0,
    weightedScoreTest2,
    weightTest3 = +parseFloat(document.getElementById("weightTest3").value, 10) || 0,
    scoreTest3 = +parseFloat(document.getElementById("scoreTest3").value, 10) || 0,
    weightedScoreTest3,
    weightProject = +parseFloat(document.getElementById("weightProject").value, 10) || 0,
    scoreProject = +parseFloat(document.getElementById("scoreProject").value, 10) || 0,
    weightedScoreProject,
    weightFinalExam = +parseFloat(document.getElementById("weightFinalExam").value, 10) || 0,
    scoreFinalExam = +parseFloat(document.getElementById("scoreFinalExam").value, 10) || 0,
    weightedScoreFinalExam,
    sumWeightsCourse,
    sumWeightedScoresCourse,
    currentGradeCourse,
    cumulativeGradeCourse;

  weightedScoreMLS = weightMLS * scoreMLS;
  document.getElementById("weightedScoreMLS").value = weightedScoreMLS;

  weightedScoreTest1 = weightTest1 * scoreTest1;
  document.getElementById("weightedScoreTest1").value = weightedScoreTest1;

  weightedScoreTest2 = weightTest2 * scoreTest2;
  document.getElementById("weightedScoreTest2").value = weightedScoreTest2;

  weightedScoreTest3 = weightTest3 * scoreTest3;
  document.getElementById("weightedScoreTest3").value = weightedScoreTest3;

  weightedScoreProject = weightProject * scoreProject;
  document.getElementById("weightedScoreProject").value = weightedScoreProject;

  weightedScoreFinalExam = weightFinalExam * scoreFinalExam;
  document.getElementById("weightedScoreFinalExam").value = weightedScoreFinalExam;

  sumWeightsCourse =
    weightMLS + weightTest1 + weightTest2 + weightTest3 + weightProject + weightFinalExam;

  document.getElementById("sumWeightsCourse").value = sumWeightsCourse;

  sumWeightedScoresCourse =
    weightedScoreMLS +
    weightedScoreTest1 +
    weightedScoreTest2 +
    weightedScoreTest3 +
    weightedScoreProject +
    weightedScoreFinalExam;

  document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

  currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

  document.getElementById("currentGradeCourse").value = currentGradeCourse;

  cumulativeGradeCourse = sumWeightedScoresCourse / 100;

  document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;
}
// End MTH 155 Course Grade Calculations

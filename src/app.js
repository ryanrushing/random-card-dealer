import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here


  // choose 1 card suit, color red/black
  // array with all suit objects
  // random suit = random index for array 

  // =====================
  //
  //      suit array 
  //
  //=======================

  const suits = [{
    icon: "♥",
    color: "red"
  },
  {
    icon: "♦",
    color: "red"
  },
  {
    icon: "♠",
    color: "black"
  },
  {
    icon: "♣",
    color: "black"
  }];

  //============================================================
  //
  // Function to pick a random index number for the suits array 
  //
  //============================================================

  let randomIndex = Math.floor(Math.random() * suits.length);
  var chosenSuit = suits[randomIndex];

  //==================================
  //
  //    Choose a value for card 
  //
  //===================================
  
  // array for card values 
  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  // function to choose a value for card 
  let randomIndexValue = Math.floor(Math.random() * cardValues.length);
  var chosenValue = cardValues[randomIndexValue];

  //======================================================
  //
  // grab html elements that need to update with that info 
  // ex) value for card update text content  
  //
  //=======================================================

  var cardIcons = document.querySelectorAll("h1");
  cardIcons[0].textContent = chosenSuit.icon;
  cardIcons[1].textContent = chosenSuit.icon;

  var cardValueDiv = document.querySelector("#card-value");
  cardValueDiv.textContent = chosenValue;


  

  console.log("Hello Rigo from the console!");
};

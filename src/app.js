import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Wait until the page is fully loaded before executing code
window.onload = function () {
  
  //============================================
  //
  //      Choose a suit + value for card
  //
  //============================================

  //--------------------
  // Suits object array
  //--------------------
  const suits = [
    { icon: "♥", color: "red" },
    { icon: "♦", color: "red" },
    { icon: "♠", color: "black" },
    { icon: "♣", color: "black" }
  ];

  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  //------------------------------------------------------------
  // Function to pick a random index number for the suits array
  //------------------------------------------------------------
  function getRandomSuit() {
    return suits[Math.floor(Math.random() * suits.length)];
  }

  //---------------------------------------------
  // Function to pick a random value for the card
  //---------------------------------------------

  function getRandomValue() {
    return cardValues[Math.floor(Math.random() * cardValues.length)];
  }

  var button = document.querySelector("#generate"); // Ensure the correct button is selected

  var secondCard      = document.querySelector("#card-second");
  var firstCard       = document.querySelector("#card-first");
  var secondCardIcons = document.querySelectorAll("#card-second .card-icon");
  var firstCardIcons  = document.querySelectorAll("#card-first .card-icon");
  var secondCardValue = document.querySelector("#card-second .card-body");
  var firstCardValue  = document.querySelector("#card-first .card-body");



  var newIcon;
  var newColor;
  var newValue;

  //==========================================
  //
  //  Function to update card information
  //
  //==========================================

  function updateCard() {

    firstCard.classList.add("card-flip");

    setTimeout(function(){
      firstCard.classList.remove("card-flip");
    },2000);

    secondCard.classList.add("card-rise");

    
    var chosenSuit = getRandomSuit();
    var chosenValue = getRandomValue();
   
    //-----------------------------------
    // Update the card's suit and color
    // ----------------------------------
    secondCardIcons.forEach((cardSuit) => {
      cardSuit.textContent = chosenSuit.icon;
      cardSuit.style.color = chosenSuit.color;

      newIcon = cardSuit.textContent;
      newColor = cardSuit.style.color;
    });
   
    //------------------------
    // Update the card value
    //------------------------
    secondCardValue.textContent = chosenValue;

    //------------------------
    // Update the back card
    //------------------------
    setTimeout(updateTopCard, 2000);
  }

  function updateTopCard(){

    firstCardIcons.forEach((cardSuit) => {

      cardSuit.textContent = newIcon;
      cardSuit.style.color = newColor;
    });

    //------------------------
    // Update the card value
    //------------------------
    newValue = secondCardValue.textContent;

    firstCardValue.textContent = newValue;
  }

  //----------------------------------------------------------------
  // Add event listener for the refresh button to draw a new card
  //----------------------------------------------------------------
  button.addEventListener("click", updateCard);


  //----------------------------------
  // Initial card setup on page load
  //----------------------------------
  updateCard();

  console.log("Hello Ian from the console!");
};

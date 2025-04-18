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

  //------------------------------------------------------------
  // Function to pick a random index number for the suits array
  //------------------------------------------------------------
  function getRandomSuit() {
    return suits[Math.floor(Math.random() * suits.length)];
  }

  //---------------------------------------------
  // Function to pick a random value for the card
  //---------------------------------------------
  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function getRandomValue() {
    return cardValues[Math.floor(Math.random() * cardValues.length)];
  }

  //==========================================
  //
  //  Function to update card information
  //
  //==========================================

  function updateCard() {
    const chosenSuit = getRandomSuit();
    const chosenValue = getRandomValue();

    //-----------------------------------
    // Update the card's suit and color
    // ----------------------------------
    const cardIcons = document.querySelectorAll(".card-icon");
    cardIcons[0].textContent = chosenSuit.icon;
    cardIcons[1].textContent = chosenSuit.icon;
    cardIcons[0].style.color = chosenSuit.color;
    cardIcons[1].style.color = chosenSuit.color;

    //------------------------
    // Update the card value
    //------------------------
    const cardValueDiv = document.querySelector("#card-value");
    cardValueDiv.textContent = chosenValue;
  }

  //----------------------------------------------------------------
  // Add event listener for the refresh button to draw a new card
  //----------------------------------------------------------------
  const button = document.querySelector("#generate"); // Ensure the correct button is selected
  button.addEventListener("click", updateCard);

  //----------------------------------
  // Initial card setup on page load
  //----------------------------------
  updateCard();

  console.log("Hello Ian from the console!");
};

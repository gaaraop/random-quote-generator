/* jshint browser: true */
/* jshint esversion: 6 */

//Make sure DOM is ready
document.addEventListener("DOMContentLoaded",function(){

// DATA
// 1. dataset of quotes and their authors
  const quotesPool = [
                ["I am not in danger, I AM the danger.",'Breaking bad',"Heisenberg"],
                ['Conviction introduces emotion,which is the enemy of oratory.','Peaky Blinders','Thomas'],
                ["Ambition for respectability doesn't make you a saint.",'Peaky Blinders','Priest'],
                ["Don't play the odds,play the man.",'Suits','Harvey Specter'],
                ['Control is an illusion','Mr.Robot','Elliot'],
                ["You come at the King, you better not miss it",'The Wire','Little'],
                ["Mornings are for coffee and comtemplation.",'Stranger Things'],
                ["Never forget what you are, the rest of the world will not. Wear it like armour and it can never be used to hurt you.",'GOT','Tyron Lanninster' ],
                ['Real chaos makes no noise','money heist','palermo'],
            ];

// 2. dataset of color schemes
  const colorsPool =  [["#ECF5B7"],
                    ["#B7E1CE"],
                    ["#FFAB91"],
                    ["#C3C8BC", "#919A84", "#5E6553"],
                    ["#EF9A9A", "#F44336", "#D32F2F"],
                    ["#E6EE9C"],
                    ["#90CAF9", "#2196F3", "#1565C0"],
                    ["#CE93D8"],
                    ["#F8BBD0", "#F06292", "#E91E63"],
                    ["#C5CAE9", "#7986CB", "#3F51B5"],
                    ["#B0BEC5"],
                    ["#B2EBF2", "#26C6DA", "#0097A7"],
                    ["#BCAAA4"]];

// VARIABLES
  let oldQuoteIndex;
  let oldColorIndex;

//Generate a random number based on argument's length
  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new quote from array
//4. Display the quote
  function generateNewQuote() {
    let index = generateNumber(quotesPool);
//While loop so no same quote is generated in a row
    while (index === oldQuoteIndex) {
      index = generateNumber(quotesPool);
    }
    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let series = document.getElementById("series");
//Show new quote and author on page
    quote.innerHTML = newQuote[0];
    author.innerHTML = newQuote[1];
    series.innerHTML = newQuote[2];
//Update Tweet href attribute with new quote and author
    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote[0] + '" -' + newQuote[1];
//update index checker
    oldQuoteIndex = index;
  }

//1. Get random number from generateNumber()
//2. check random number to make sure it's not same as last one
//3. Use random number to get new color scheme from array
//4. Update page with new color scheme
  function generateNewColor() {
    let index = generateNumber(colorsPool);
// While loop so no same color scheme is generated in a row
    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];
//Update page with new color scheme
    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
//update index checker
    oldColorIndex = index;
  }

//Show new quote and change color scheme on 'Random Quote' button click
  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();

// Get the first quote and color scheme on window load
  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };

});

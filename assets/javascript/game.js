//variables and functions
var computerchoices = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var win = 0;
var loss = 0;
var guessesleft = 9;
var computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
var letterchosensofar = [""];

function start () {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
 }; 

function reset () {
  guessesleft = 9;
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
  letterchosensofar = [" "] ;
 }; 


//Calling the start function to begin the game. 
    start();
 
// This function is run whenever the user presses a key.   
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      //making sure that the user can only press letter keys
      //if choice is not A-Z it will exit the function
      if (!/[a-zA-Z]/.test(userGuess)) {
          alert("Only choose letters!")
          return;               
      }; 

   
      
      if (guessesleft > 0) {

        if (userGuess === computerGuess) {
          //incrementing wins
          win++;
          //update userswins id
          document.getElementById("userswins").innerHTML = win;
          //call reset function
          reset();
          alert("CONGRATULATIONS, YOU WIN!");
        } 
        else {
          //if letter guessed is wrong is it in the letters chosen so far array
            if (letterchosensofar.indexOf(userGuess) === -1) {
              //if not push that letter into letters chosen
              letterchosensofar.push(userGuess);
              //update letters chosen 
              document.getElementById("letters").innerHTML = letterchosensofar;
              guessesleft--;
              //updating the guessesleft 
              document.getElementById("guess").innerHTML = guessesleft;
            }
            else {
              alert("You already chose that letter!");
              //This way our guesses will not decrease it ends the program
              return;
            }
        } 
      }
      else  {
        //incrementing losses
        loss++;
        //updating loses
        document.getElementById("computerwins").innerHTML = loss;
        //call reset function
        reset();
        console.log("YOU LOST!");
      }
        
    };   
      

 
      
























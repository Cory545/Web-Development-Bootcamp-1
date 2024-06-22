
// Variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

//Checks for a keypress to start the game. Only does if started = false.
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//Checks to see if the users array matches the games array. If it is, it carries on with using nextSequence. If not, doesn't let them to continue.
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (userClickedPattern.length === gamePattern.length){
       setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        var audioFail = new Audio("sounds/wrong.mp3");
        audioFail.play();
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key To Restart");
        startOver();
    };
};

// Checks for the button being pressed by the user, and sends the result off to be checked by checkAnswer.
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

//Goes up a level by 1, will randomly select a button and will be stored in the games Array.
function nextSequence() {
 userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(150).fadeOut(150).fadeIn(150);
  playSound(randomChosenColour);
}

//When called, will play a sound related to the colour.
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Does the visual effect of a button being pressed by either the game or the user.
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

// Resets all the variables, so the game can be played again.
function startOver(){
     gamePattern = [];
     userClickedPattern = [];
     started = false;
     level = 0;
}
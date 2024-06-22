
// Creating a variable that has all the buttons for .drum, using length to get all of them.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting a button press, finding out which key it was. And sending it to the function makeSound
for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

});


// If a button was pressed, sending info to this to say which it was.
    function makeSound(key){

                switch(key){

            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;

                case "s":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
                break;

                case "d":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;

                case "j":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;

                case "k":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;

                case "l":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
        }
    }
    }


    // Detecting keyboard press. Sends which it was to the function makeSound
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Making the animation
function buttonAnimation(currentKey){

   var activeButton=  document.querySelector("." + currentKey);

   activeButton.classList.remove("pressed");

   activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 500);


};
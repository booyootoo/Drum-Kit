
//getting the number of buttons on the page.
var numberOfButtons = document.querySelectorAll(".drum").length;
var buttonsToPress = [];

//assigning an eventlistener to the buttons
for (var i = 0; i < numberOfButtons; i++) {
    //Adding the buttons that can be pressed so this can be used later on.
    buttonsToPress.push(document.querySelectorAll(".drum")[i].innerHTML);
    //alert(buttonsToPress[i]);

    //assigning the listener to the buttons.
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
        //getting the button text and using that to call the function to play a sound.
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
     });
}

//event listener for the press of the letters corresponding to the buttons.
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    //only listen to the keys that are mapped to a button.
    if (buttonsToPress.includes(keyPressed)) {
        playSound(keyPressed);
    } else {
        console.log("this key is not mapped.");
    }
    
});


function playSound(playSound) {
    switch (playSound) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    
        default:
            console.log(playSound);
            break;
    }
}

var numberOfButtons = document.querySelectorAll("button").length;
var sounds = [];


for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () { 
        this.style.color = "white";
        //document.querySelectorAll("button")[i].classList.add("w");
        //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
     });
}
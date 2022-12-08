// Create a function that does something when a button gets clicked
// addEventListener sets up a function to be called whenever the specified event is delivered to the target
// A click is an example of an addEventListener
//
// document.querySelector("button").addEventListener("click", handleClick);
//
// // The line of code above locates the first html element with the class of button then addEventListener waits for a user click before running the function we specify
// // We are passing a function as an input so that it can be called at a later time.
//
//
// function handleClick() {
//
//   alert("I got clicked!");
//
// }

// Anonymous function below:
// document.querySelector("button").addEventListener("click", function () {
//
//   alert("I got clicked!");
//
// })


//Here we are detecting button press
var btns = document.querySelectorAll(".drum");
// querySelectorAll we made the class name .drum in case we add more buttons later that we dont want to be a part of this function

for (var i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

  });
}

//Detecting keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      // with newAudio we are creating a new html audio element or audio object and we specify the location of our audio file then we call the method (play) associated with our new audio object.
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare1 = new Audio("sounds/snare.mp3");
      snare1.play();
      break;

    case "k":
      var crash1 = new Audio("sounds/crash.mp3");
      crash1.play();
      break;

    case "l":
      var kick1 = new Audio("sounds/kick-bass.mp3");
      kick1.play();
      break;

    default:

  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

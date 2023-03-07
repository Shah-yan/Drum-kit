// alert("File linked")

/*
let btn = document.querySelector("button")
btn.addEventListener('click', handleClick)

function handleClick(){
    alert("I was clicked !")
}
*/

// writing the above with anonymous function 

// let btn = document.querySelectorAll(".drum")





// ********************   Detecting Keyboard press  *********************************


var numOfDrum = document.querySelectorAll(".drum").length

for(let i = 0; i< numOfDrum; i++)

document.querySelectorAll(".drum")[i].addEventListener('click', function (){
    // alert("I got Clicked!")
    // console.log(this.innerHTML)

    // console.log(this)    // this will give me the complete button object i.e. is clicked.
    // console.log(this.innerHTML)    // this will just give us the button

    // this.style.color = "white";    // by doing this we can see it is targetting only the btn i.e. clicked

    let buttonInnerHTML = this.innerHTML

    // switch (buttonInnerHTML) {
    //     case "w":
    //         let tom1 = new Audio("sounds/tom-1.mp3")
    //         tom1.play();
    //         break;
    //     case "a":
    //         let tom2 = new Audio("sounds/tom-2.mp3")
    //         tom2.play();
    //         break;
    //     case "s":
    //         let tom3 = new Audio("sounds/tom-3.mp3")
    //         tom3.play();
    //         break;
    //     case "d":
    //         let tom4 = new Audio("sounds/tom-4.mp3")
    //         tom4.play();
    //         break;
    //     case "j":
    //         let snare = new Audio("sounds/snare.mp3")
    //         snare.play();
    //         break;
    //     case "k":
    //         let crash = new Audio("sounds/crash.mp3")
    //         crash.play();
    //         break;
    //     case "l":
    //         let kickBass = new Audio("sounds/kick-bass.mp3")
    //         kickBass.play();
    //         break;
    
    //     default:
    //         console.log()
    //         break;
    // }

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)

    
})




// ********************   Detecting Button press  *********************************
// Now we are working to play the drum by keyboard

// here evenet inside the function return us the object of the key pressed

// passing a function as parameters
// that has a call back funciton i.e. passed to the makeSound() function
document.addEventListener("keydown", function(event){
    // alert("Key was pressed !")
    // console.log(event)

    // this gives us the key i.e. pressed
    makeSound(event.key)
    buttonAnimation(event.key)
})



// ********************   plays the sound  *********************************


function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
    
        default:
            console.log()
            break;
    }
}



// ********************  Button Animation  *********************************

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey)

    // adding the class
    activeButton.classList.add('pressed');

    // at some delay we will remove that class to remove the shadow from it
    setTimeout(() => {
    activeButton.classList.remove('pressed');
    }, 100);
    
}





// // This is how we play the audio in js - This creates HTML audio element
// let tom1 = new Audio("sounds/tom-1.mp3")
// tom1.play();
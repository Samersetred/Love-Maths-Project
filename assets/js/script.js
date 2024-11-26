

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button"); // We create an Array here, and now we need to navigate it

for (let button of buttons) {  // this could be coded (let i = 0; i < buttons.length; i++) which would set i to 0, then incrementally comb the array
    // this is more modern, it goes through our button array, returning each element in the array, which will be stored in the variable "button" on each iteration
    button.addEventListener("click", function() { // waiting again, for a specified click on a button
        if (this.getAttribute("data-type") === "submit") { // within this code block "this" refers to any of our button elements tagged "button" that was just clicked.
            alert("You clicked Submit"); // However, when any of our buttons get clicked, a 'getAttribute' method is executed, checking if the button has the submit data type
                                        // we use the strict equality operator, (don't know why). If it returns true that it's the 'submit' button, we get a popup alert
        } else{
            let gameType = this.getAttribute("data-type")
            alert(`You clicked ${gameType}`); // notice the use of template literals, letting us implement the previously written gameType variable's code into a string
                                            // which includes o
        }
    })
}
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

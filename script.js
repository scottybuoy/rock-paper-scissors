// var game = prompt("Let's play Rock, Paper, Scissors!", "What's your move?");
var compChoice = Math.floor(Math.random() * 3) + 1;
var userMove;
var counter = 0;

if (compChoice === 1) {
    compChoice = "r";
} else if (compChoice === 2) {
    compChoice = "p";
} else {
    compChoice = "s";
}


var executeGame = function(user, computer) {

    if (user === computer) {
        return "It's a tie!";
    } else if (user === "r" && computer === "s") {
        return "User Wins!"; 
    } else if (user === "r" && computer === "p") {
        return "Computer Wins!";
    } else if (user === "p" && computer === "r") {
        return "User Wins!";
    } else if (user === "p" && computer === "s") {
        return "Computer Wins!";
    } else if (user === "s" && computer === "p") {
        return "User Wins!";
    } else if (user === "s" && computer === "r") {
        return "Computer Wins!";
    }
}


document.getElementById("rockBtn").addEventListener("click", function() {
    var compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        compChoice = "r";
    } else if (compChoice === 2) {
        compChoice = "p";
    } else {
        compChoice = "s";
    }
    userMove = "r";

    if (executeGame(userMove, compChoice) == "User Wins!") {
        counter ++;
    }

    document.getElementById("userWins").innerHTML = " " + counter;


});
document.getElementById("paperBtn").addEventListener("click", function() {
    var compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        compChoice = "r";
    } else if (compChoice === 2) {
        compChoice = "p";
    } else {
        compChoice = "s";
    }
    userMove = "p";
    console.log(executeGame(userMove, compChoice));
});
document.getElementById("scissorsBtn").addEventListener("click", function() {
    var compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        compChoice = "r";
    } else if (compChoice === 2) {
        compChoice = "p";
    } else {
        compChoice = "s";
    }
    userMove = "s";
    console.log(executeGame(userMove, compChoice));
});


console.log(counter);

// document.getElementById("userWins").innerHTML = " " + counter;




// Keep prompting for valid input

// while (game !== "r" && game !== "p" && game !== "s" && game != null) {
//    if ( game !== "r" && game !== "p" && game !== "s") {
//        var game = prompt("Please enter valid input", "What's your move?");
//    } 
// }





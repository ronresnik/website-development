let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultMessage_p = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const available_choices = ['rock', 'paper', 'scissors'];
                    
function main(){
rock_div.addEventListener("click",function() {
    console.log("hey you clicked ROCK")
    Game("rock")
})
paper_div.addEventListener("click",function() {
    console.log("hey you clicked PAPER ")
    Game("paper")
})
scissors_div.addEventListener("click",function() {
    console.log("hey you clicked  scissors")
    Game("scissors")
})
}

function updateResult(result, ...choices){
    console.log(result, choices);
    console.log(`You picked ${choices[0]} and Computer picked ${choices[1]} - ${result}!`);
    resultMessage_p.innerHTML = `You picked ${choices[0]} and Computer picked ${choices[1]} - ${result}!`;
    switch(result){
        case "User WINS":
            userScore++;
            userScore_span.innerHTML = userScore;
            break;
        case "User Loses":
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            break;
        case "It's a TIE":
            console.log("no change to the points");
    }
}

function Game(userChoice){
    const computerChoice = available_choices[Math.floor(Math.random() * 3 )];
    console.log(computerChoice)
    let scenario  = userChoice+" "+computerChoice;
    switch(scenario){
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            updateResult("User WINS", userChoice,computerChoice);
            break;
        case "scissors rock":
        case "rock paper":
        case "paper scissors":
            updateResult("User Loses", userChoice,computerChoice);
            break;
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            updateResult("It's a TIE", userChoice,computerChoice);
            break;
    }
}

main();

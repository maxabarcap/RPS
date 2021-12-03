
const buttons = document.querySelectorAll('button');
const buttons2 = document.querySelector('.buttons')
const results = document.querySelector('.results'); 
const content = document.querySelector('#result');
const winCounter = document.querySelector('.winCounter');
const loseCounter = document.querySelector('.loseCounter');
const counters = document.querySelector('.counters');
const announcement = document.querySelector('.announcement');
const winner = document.querySelector('.winner');
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');


let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let rndm = (Math.random()*100);
    if (rndm<33)
        return "Rock"
    else if (rndm<66)
        return "Paper"
    else
        return "Scissors"
}

function displayResult(result) {
    results.removeChild(content);
    content.textContent = result;
    results.appendChild(content);
}

function resetGame() {
    location.reload()
}

function checkWinner() {
    if (playerScore == 5) {
        buttons2.removeChild(buttonRock);
        buttons2.removeChild(buttonScissors);
        buttons2.removeChild(buttonPaper);
        let tryAgainButton = document.createElement('button')
        tryAgainButton.textContent = "Try Again!"
        buttons2.appendChild(tryAgainButton);
        setTimeout( () => {tryAgainButton.addEventListener('click', function () {resetGame() } ) }, 2000);
        announcement.removeChild(winner)
        winner.textContent = "Player Wins!"
        announcement.appendChild(winner);

    }
    else if (computerScore == 5) {
        buttons2.removeChild(buttonRock);
        buttons2.removeChild(buttonScissors);
        buttonPaper.textContent = "Try Again"   
        buttonPaper.addEventListener('click',resetGame())  
        announcement.removeChild(winner)
        winner.textContent = "Computer Wins!"
        announcement.appendChild(winner);
    }
}

function updateCounters(result) {
    if (result == "win") {
        playerScore++;
        counters.removeChild(winCounter);
        counters.removeChild(loseCounter);
        winCounter.textContent = "Player's Score: " + playerScore;
        counters.appendChild(winCounter);
        counters.appendChild(loseCounter);
    }
    else if (result == "lose") {
        computerScore++;
        counters.removeChild(loseCounter);
        loseCounter.textContent = "Computer's Score: " + computerScore;
        counters.appendChild(loseCounter);
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        displayResult("It's a Tie!")}
    else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection.toLowerCase() == "paper"){
            displayResult("You Lose, Paper beats Rock")
            updateCounters("lose")
            checkWinner()}
        else if (computerSelection.toLowerCase() == "scissors"){
            displayResult("You Win!, Rock beats Scissors")
            updateCounters("win")
            checkWinner()}
        else {
            displayResult("Error Rock") }}
    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection.toLowerCase() == "scissors"){
            displayResult("You Lose, Scissors beats Paper")
            updateCounters("lose")
            checkWinner()}
        else if (computerSelection.toLowerCase() == "rock"){
            displayResult("You Win!, Paper beats Rock")
            updateCounters("win")
            checkWinner()}
        else{
            displayResult("Error Paper")}}
    else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection.toLowerCase() == "rock"){
            displayResult("You Lose, Rock beats Scissors")
            updateCounters("lose")
            checkWinner()}           
        else if (computerSelection.toLowerCase() == "paper"){
            displayResult("You Win!, Scissors beats Paper")
            updateCounters("win")
            checkWinner()}
        else{
            displayResult("Error Scissors")}}
    else{
        displayResult("Error")
    }
}

function playGame() {
    
}

buttons.forEach(button=> button.addEventListener('click' , function () {playRound(button.id,computerPlay())}))

//function game() {
//    let tieCounter = 0;
//    let winCounter = 0;
//    let loseCounter = 0;
//    for (let i = 1; i < 6; i++) {
//        playerInput = prompt("Rock, Paper or Scissors?");
//        let result = playRound(playerInput,computerPlay());
//        console.log(result.slice(4,8));
//        if ( result.slice(4,7) == "Win" ) {
//            winCounter++
//           alert( "You Win round " + i);
//        }
//       else if ( result.slice(4,8) == "Lose"){
//           loseCounter++
//           alert( "You Lose round " + i);
//        }
//        else {
//           tieCounter++
//            alert( "You Tied round " + i);
//        }
//   }
//
//    let finalResult = "";
//    if (tieCounter == 5){
//        finalResult = "You tied all rounds!"
//    }
//    else if (winCounter > loseCounter){
//        finalResult = "You Win the game!"
//    }
//    else if (loseCounter > winCounter){
//       finalResult = "You Lose the game!"
//    }
//    else{
//        finalResult = "It's a Tie!"
//    }
//    lastResult = finalResult + ", You won " + winCounter + " rounds, lost " + loseCounter + " rounds and tied " + tieCounter + " rounds."
//   alert(lastResult)
//}
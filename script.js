function computerPlay() {
    let rndm = (Math.random()*100);
    if (rndm<33)
        return "Rock"
    else if (rndm<66)
        return "Paper"
    else
        return "Scissors"
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a Tie!"}
    else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection.toLowerCase() == "paper"){
            return "You Lose, Paper beats Rock" }
        else if (computerSelection.toLowerCase() == "scissors"){
            return "You Win!, Rock beats Scissors"}
        else {
            return "Error Rock" }}
    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection.toLowerCase() == "scissors"){
            return "You Lose, Scissors beats Paper"}
        else if (computerSelection.toLowerCase() == "rock"){
            return "You Win!, Paper beats Rock"}
        else{
            return "Error Paper"}}
    else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection.toLowerCase() == "rock"){
            return "You Lose, Rock beats Scissors"}
        else if (computerSelection.toLowerCase() == "paper"){
            return "You Win!, Scissors beats Paper"}
        else{
            return "Error Scissors"}}
    else{
        return "Error"
    }
}

let lastResult = "Empty";

function game() {
    let tieCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;
    for (let i = 1; i < 6; i++) {
        playerInput = prompt("Rock, Paper or Scissors?");
        let result = playRound(playerInput,computerPlay());
        console.log(result.slice(4,8));
        if ( result.slice(4,7) == "Win" ) {
            winCounter++
            alert( "You Win round " + i);
        }
        else if ( result.slice(4,8) == "Lose"){
            loseCounter++
            alert( "You Lose round " + i);
        }
        else {
            tieCounter++
            alert( "You Tied round " + i);
        }
    }

    let finalResult = "";
    if (tieCounter == 5){
        finalResult = "You tied all rounds!"
    }
    else if (winCounter > loseCounter){
        finalResult = "You Win the game!"
    }
    else if (loseCounter > winCounter){
        finalResult = "You Lose the game!"
    }
    else{
        finalResult = "It's a Tie!"
    }
    lastResult = finalResult + ", You won " + winCounter + " rounds, lost " + loseCounter + " rounds and tied " + tieCounter + " rounds."
    alert(lastResult)
}

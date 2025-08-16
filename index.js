let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return "rock";
  } else if (randomNumber < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Please input rock, paper, or scissors").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice, please try again.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Round ${i}:`);
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    console.log("-------------------");
  }

  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (humanScore < computerScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

// Chạy game
playGame();

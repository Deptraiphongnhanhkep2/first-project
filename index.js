let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.34) {
    return "rock";
  } else if (randomNumber <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Please input your choice: rock, paper, scissors"
  ).toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Please input correct choice");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return "You lose";
  } else {
    humanScore++;
    return "You win";
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(
      "your choice is",
      humanChoice,
      "computer choice is",
      computerChoice
    );
    console.log(result);
  }
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (humanScore < computerScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}
playGame();
const options = ["rock", "paper", "scissors"];
let userChosenOption = "";
const resultArray = ["draw", "win", "lose"];
let result = "";

const getComputerChoice = () => {
  const computerRandomNumber = Math.floor(Math.random() * 3); // 0 - 2
  console.log("computerChoice: ", options[computerRandomNumber]);
  const computerChosenOption = options[computerRandomNumber];
  return computerChosenOption;
};

const gameLogic = (user) => {
  const computer = getComputerChoice();

  if (computer == "rock" && user == "rock") {
    result = resultArray[0];
    console.log("Draw!");
  } else if (computer == "scissors" && user == "rock") {
    result = resultArray[1];
    console.log("Win!");
  } else if (computer == "paper" && user == "rock") {
    result = resultArray[2];
    console.log("Lose!");
  } else if (computer == "rock" && user == "paper") {
    result = resultArray[1];
    console.log("Win!");
  } else if (computer == "scissors" && user == "paper") {
    result = resultArray[2];
    console.log("Lose!");
  } else if (computer == "paper" && user == "paper") {
    result = resultArray[0];
    console.log("Draw!");
  } else if (computer == "rock" && user == "scissors") {
    result = resultArray[2];
    console.log("Lose!");
  } else if (computer == "scissors" && user == "scissors") {
    result = resultArray[0];
    console.log("Draw!");
  } else if (computer == "paper" && user == "scissors") {
    result = resultArray[1];
    console.log("Win!");
  }
  document.getElementById("computersChoice").innerHTML = computer;
  document.getElementById("result").innerHTML = result;
};

const rockOption = document
  .getElementById("rock")
  .addEventListener("click", function () {
    document.getElementById("optionChosen").innerHTML = "rock";
    userChosenOption = options[0];
    console.log("userChosenOption:", userChosenOption);
    gameLogic("rock");
  });

const paperOption = document
  .getElementById("paper")
  .addEventListener("click", function () {
    document.getElementById("optionChosen").innerHTML = "paper";
    userChosenOption = options[1];
    console.log("userChosenOption:", userChosenOption);
    gameLogic("paper");
  });

const scissorsOption = document
  .getElementById("scissors")
  .addEventListener("click", function () {
    document.getElementById("optionChosen").innerHTML = "scissors";
    userChosenOption = options[2];
    console.log("userChosenOption:", userChosenOption);
    gameLogic("scissors");
  });

const reset = document
  .getElementById("reset")
  .addEventListener("click", function () {
    console.log("Game restarted.");
    document.getElementById("optionChosen").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("computersChoice").innerHTML = "";
  });

const choices = document.querySelectorAll(".choice");
const playerScoreElem = document.querySelector(".player-score");
const computerScoreElem = document.querySelector(".computer-score");
const resultElem = document.querySelector("#result");
const playAgainBtn = document.querySelector("#play-again");
const playAreaElem = document.querySelector("#play-area");
const computerChoiceElem = document.querySelector("#computer-choice");

const weapons = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return new Promise((resolve) => {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    resolve(weapons[weaponIndex]);
  });
}

function updateScore(playerWeapon, computerWeapon) {
  return new Promise((resolve) => {
    if (playerWeapon) {
      computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;
      if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "It's a tie!";
      } else if (
        (playerWeapon === "rock" && computerWeapon === "scissors") ||
        (playerWeapon === "paper" && computerWeapon === "rock") ||
        (playerWeapon === "scissors" && computerWeapon === "paper")
      ) {
        resultElem.innerHTML = "You win!";
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
      } else {
        resultElem.innerHTML = "Computer wins!";
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
      }
    } else {
      computerChoiceElem.innerHTML = `Game Over`;
      resultElem.innerHTML = " You lose the game!";
      resultElem.style.color = "red";
      disableOptions();
    }

    if (playerScore === 5) {
      resultElem.textContent = "You win the game!";
      resultElem.style.color = "green";
      computerChoiceElem.innerHTML = "Game Over";
      disableOptions();
      clickSoundWin.play();
    }

    if (computerScore === 5) {
      resultElem.textContent = "You lose the game!";
      resultElem.style.color = "red";
      computerChoiceElem.innerHTML = "Game Over";
      disableOptions();
    }

    resolve();
  });
}

async function selectWeapon() {
  playAreaElem.innerHTML = "";
  const playerWeapon = this.id;
  const computerWeapon = await computerPlay();
  await updateScore(playerWeapon, computerWeapon);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreElem.innerHTML = "Player: 0";
  computerScoreElem.innerHTML = "Computer: 0";
  resultElem.innerHTML = "Choose one";
  playAreaElem.innerHTML = "";
  resultElem.style.color = "#4725cf";
  computerChoiceElem.innerHTML = "";
  enableOptions();
}

function disableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
}

function enableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = "auto";
  });
}

const clickSound = new Audio(
  "./Cartoon Weird Noise Short Mouth Popping 02.mp3"
);
const clickSoundWin = new Audio(
  "./Audience Clapping - Sound Effect  מחיאת כפיים.mp3"
);
function playClickSound() {
  clickSound.play();
}

choices.forEach((choice) => choice.addEventListener("click", selectWeapon));
choices.forEach((choice) => choice.addEventListener("click", playClickSound));

playAgainBtn.addEventListener("click", resetGame);

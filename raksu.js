let leftDistance;
let sofiaOriginalScore = 0;
let iidaOriginalScore = 0;
const square = document.getElementById("raksu");

document.addEventListener("keyup", event => {
  if (leftDistance === 20 || leftDistance === 60) {
    endGame();
  } else {
    handleKeyPress(event.keyCode);
  }
});

const handleKeyPress = keyCode => {
  if (keyCode === 32) {
    moveTo(--leftDistance);
  } else if (keyCode === 13) {
    moveTo(++leftDistance);
  }
};

const moveTo = (distance) => square.style.left = distance + "vw";

const incrementScore = () => {
  if (leftDistance === 20) {
    iidaOriginalScore++;
    updateScore("iida-score", iidaOriginalScore);
  } else if (leftDistance === 60) {
    sofiaOriginalScore++;
    updateScore("sofia-score", sofiaOriginalScore);
  }
};

const updateScore = (id, score) => {
    document.getElementById(id).innerHTML = "Score: " + score;
}

const resetGame = () => {
  leftDistance = 40;
  square.style.left = leftDistance + "vw";
};

resetGame(); 

const endGame = () => {
  if (leftDistance === 20) {
    win('Iida');
  } else if (leftDistance === 60) {
    win('Sofia');
  }
  resetGame();
};

const win = (name) => {
    alert(name + " won Raksu's affection");
    incrementScore(); 
};

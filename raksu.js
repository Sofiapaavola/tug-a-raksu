let leftDistance;
let sofiaOriginalScore = 0;
let iidaOriginalScore = 0;
const square = document.getElementById("raksu");

document.addEventListener("keyup", event => {
  if (leftDistance === 20 || leftDistance === 60) {
    endGame();
  } else {
    move(event.keyCode);
  }
});

const move = keyCode => {
  if (keyCode === 32) {
    square.style.left = --leftDistance + "vw";
    // if (leftDistance === 30) { 
    //     square.style.left **= leftDistance + "vw";
    // }
  } else if (keyCode === 13) {
    square.style.left = ++leftDistance + "vw";
  }
};

const scoreIncrement = () => {
  if (leftDistance === 20) {
    iidaOriginalScore++;
    document.getElementById("iida-score").innerHTML =
      "Score: " + iidaOriginalScore;
  } else if (leftDistance === 60) {
    sofiaOriginalScore++;
    document.getElementById("sofia-score").innerHTML =
      "Score: " + sofiaOriginalScore;
  }
};

const resetGame = () => {
  leftDistance = 40;
  square.style.left = leftDistance + "vw";
};

resetGame(); 

const endGame = () => {
  if (leftDistance === 20) {
    alert("Iida won Raksu's affection");
    scoreIncrement();
  } else if (leftDistance === 60) {
    alert("Sofia won Raksu's affection");
    scoreIncrement();
  }
  resetGame();
};

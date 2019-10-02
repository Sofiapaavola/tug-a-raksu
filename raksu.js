let leftDistance = 40; 
let sofiaOriginalScore = 0;
let iidaOriginalScore = 0;
let iidaScore = document.getElementById("iida-score");
let sofiaScore = document.getElementById("sofia-score")
const square = document.getElementById("raksu");
square.style.left = leftDistance + "vw";

document.addEventListener("keyup", event => {
  if (leftDistance === 20 || leftDistance === 60) {
    endGame();
  } else {
    move(event.keyCode);
  }
});

const move = (keyCode) => {
    if (keyCode === 32) {
        square.style.left = --leftDistance + "vw";
    } else if (keyCode === 13) {
        square.style.left = ++leftDistance + "vw";
    }
}

const scoreIncrement = () => {
    if (leftDistance === 20) {
    iidaOriginalScore++;
    iidaScore.innerHTML = "Score: " + iidaOriginalScore;
    } else if (leftDistance === 60) {
    sofiaOriginalScore++;
    sofiaScore.innerHTML = "Score: " + sofiaOriginalScore;
    }
}

const resetGame  = () => {
    square.style.left = 40 + "vw";
    leftDistance = 40;
}

const endGame = () => {
    if (leftDistance === 20) {
        alert("Iida won Raksu's affection");
        scoreIncrement();
    } else if (leftDistance === 60) {
        alert("Sofia won Raksu's affection"); 
        scoreIncrement();
    }
    resetGame();
}

// endGame --> increment appropriate score & alert

// checkIfFinsihed

const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
    lives: document.querySelector("#lives"),
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    curretTime: 60,
    lives: 3,
  },
  actions: {
    timerId: null,
    countDownTimerId: setInterval(countDown, 1000),
  }
};

function countDown () {
  state.values.curretTime--;
  state.view.timeLeft.textContent = state.values.curretTime;

  if (state.values.curretTime <= 0) {
    clearInterval(state.actions.timerId);
    clearInterval(state.actions.countDownTimerId);
    alert("Game Over! O seu resultado foi: " + state.values.result);
    reset();
  }
}

function reset() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });

  state.actions.timerId = setInterval(randomSquare, 1000);
  state.actions.countDownTimerId = setInterval(countDown, 1000);

  state.values.lives = 3;
  state.values.result = 0;
  state.values.currentTime = 60;

  state.view.score.textContent = state.values.result;
  state.view.lives.textContent = state.values.lives;
  state.view.timeLeft.textContent = state.values.currentTime;
}

function playSound () {
  let audio = new Audio("./src/audios/hit.m4a");
  audio.volume = 0.2;
  audio.play();
}
 
function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}

function moveEnemy () {
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound();
      } else {
        state.values.lives--;
        state.view.lives.textContent = state.values.lives;

        if (state.values.lives <= 0) {
          resetCountDown();
          alert("Game Over! O seu resultado foi: " + state.values.result);
          reset();
        }
     }
   });
  });
}

function initialize() {
  state.view.score.textContent = state.values.result;
  state.view.lives.textContent = state.values.lives;
  state.view.timeLeft.textContent = state.values.currentTime;

  moveEnemy();
  addListenerHitBox();
}

initialize();
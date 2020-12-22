import Enemy from "./enemy";
import Background from "./background";
import Player from "./player";
import * as firebaseAPI from "./firebasedb";

export default class Game {
  constructor(canvas, ctx, bgCtx, pCtx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.bgCtx = bgCtx;
    this.pCtx = pCtx;
    this.background = new Background(canvas, bgCtx, 1.0);
    this.focused = true;
    this.startGame = false;
    this.gameOver = false;
    this.ships = [];
    this.player = new Player(canvas, pCtx);
    this.words = [];
    this.startPositions = [
      [96, 80],
      [172, 70],
      [63, 30],
      [120, 25],
      [197, 20],
    ];
    this.usedStartPos = [];

    this.animate = this.animate.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
    this.start = this.start.bind(this);
    this.createEnemy = this.createEnemy.bind(this);
    this.generateEnemies = this.generateEnemies.bind(this);
    this.generateAttacks = this.generateAttacks.bind(this);
    this.enemyAttack = this.enemyAttack.bind(this);
    this.losingScreen = this.losingScreen.bind(this);
    this.newHighScoreModal = this.newHighScoreModal.bind(this);
    this.updateLeaderBoard = this.updateLeaderBoard.bind(this);
    this.bgrunning = setInterval(this.animateBackground, 125);
    this.updateLeaderBoard();
  }

  animateBackground() {
    this.bgCtx.canvas.width = window.innerWidth;
    this.bgCtx.canvas.height = window.innerHeight;
    this.pCtx.canvas.width = window.innerWidth;
    this.pCtx.canvas.height = window.innerHeight;
    this.background.animate();
    this.player.animate();
  }

  animate() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];
      if (ship.rendered) {
        ship.animate();
      } else {
        this.startPositions.push(this.ships[i].shipPos);
        this.ships.splice(i, 1);
      }
    }
  }

  start() {
    if (!this.startGame) {
      this.generateEnemies();
      this.generateAttacks();

      this.startGame = true;
      const playerWord = document.getElementById("player-word");
      playerWord.autofocus = true;
    }

    var animation = requestAnimationFrame(this.start);
    window.onblur = () => (this.focused = false);
    window.onfocus = () => {
      this.focused = true;
      this.generateEnemies();
      this.generateAttacks();
    };

    const playerWord = document.getElementById("player-word");
    playerWord.autofocus = true;
    this.canvas.addEventListener("click", () => playerWord.focus());
    document
      .getElementById("bg-canvas")
      .addEventListener("click", () => playerWord.focus());
    document
      .getElementById("player-screen")
      .addEventListener("click", () => playerWord.focus());

    if (this.player.health > 0) {
      this.animate();
    } else {
      this.gameOver = true;
      cancelAnimationFrame(animation);
      clearInterval(this.bgrunning);
      this.losingScreen();
    }
  }

  createEnemy(canvas, ctx) {
    if (this.startPositions.length) {
      let enemy = new Enemy(canvas, ctx, 0.01, this.startPositions[0]);
      this.ships.push(enemy);
      this.words.push(enemy.word);
      let x = this.startPositions.shift();
      this.usedStartPos.push(x);
    }
  }

  generateEnemies() {
    let delay = Math.floor(Math.random() * 5000);
    if (this.focused) {
      setTimeout(() => {
        this.createEnemy(this.canvas, this.ctx);
        this.generateEnemies();
      }, delay - 0.2);
    }
  }

  generateAttacks() {
    let delay = Math.floor(Math.random() * 5000);
    if (this.focused) {
      setTimeout(() => {
        if (this.ships.length) this.enemyAttack();
        this.generateAttacks();
      }, delay - 0.2);
    }
  }

  enemyAttack() {
    let ship = this.ships[Math.floor(Math.random() * this.ships.length)];
    if (!ship.attacking && !ship.exploding && ship.dz >= 1) {
      ship.attacking = true;
      this.player.health -= 1;
    }
  }

  checkWord(word) {
    let i = this.words.indexOf(word);
    if (i != -1) {
      this.words.splice(i, 1);
      this.ships[i].exploding = true;
      this.player.score += 1;
    }
  }

  losingScreen() {
    const hiscore = firebaseAPI.checkScore(this.player.score);
    const form = document.getElementById("input-section");
    form.style.display = "none";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.bgCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.pCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = "30px Red Rose";
    this.ctx.textAlign = "center";
    const leaderboard = document.getElementById("leaderboard-container");
    leaderboard.style.display = "flex";

    if (hiscore) {
      this.newHighScoreModal();
    } else {
      this.ctx.fillText("Game Over", this.canvas.width / 2, 100);
    }

    this.ctx.font = "25px Red Rose";
    this.ctx.fillText("Your Score:", this.canvas.width / 2, 150);
    this.ctx.fillText(this.player.score, this.canvas.width / 2, 190);

    this.ctx.font = "20px Red Rose";
    this.ctx.fillText(
      "Press Ctrl+Space to Play Again",
      this.canvas.width / 2,
      this.canvas.height - 100
    );
  }

  newHighScoreModal() {
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = "30px Red Rose";
    this.ctx.textAlign = "center";
    this.ctx.fillText("New High Score", this.canvas.width / 2, 90);

    this.ctx.font = "20px Red Rose";
    const leaderboardEntry = document.getElementById("leaderboard-entry");
    const newForm = document.createElement("form");
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("value", "");
    newInput.setAttribute("maxlength", "3");
    newInput.autoFocus = true;
    newForm.appendChild(newInput);
    leaderboardEntry.appendChild(newForm);
    const score = this.player.score;
    newInput.focus();
    newForm.addEventListener("submit", (e) => {
      e.preventDefault();

      firebaseAPI.addScore(newInput.value.toUpperCase(), score).then(() => {
        while (leaderboardEntry.firstChild) {
          leaderboardEntry.removeChild(leaderboardEntry.firstChild);
        }
        this.updateLeaderBoard();
      });
    });
  }

  updateLeaderBoard() {
    const leaderboard = document.getElementById("leaderboard");
    while (leaderboard.firstChild) {
      leaderboard.removeChild(leaderboard.firstChild);
    }

    firebaseAPI.getScores().then((query) => {
      const scores = query.docs;
      let rank = 1;
      scores.forEach((entry) => {
        const { name, score } = entry.data();
        let newLi = document.createElement("li");
        let newRank = document.createElement("h3");
        let newName = document.createElement("h3");
        let newScore = document.createElement("h3");
        newRank.innerHTML = rank;
        newName.innerHTML = name.slice(0, 3);
        newScore.innerHTML = score;
        newLi.appendChild(newRank);
        newLi.appendChild(newName);
        newLi.appendChild(newScore);
        newLi.setAttribute("class", "lb-stat");
        leaderboard.appendChild(newLi);
        rank += 1;
      });
    });
  }
}

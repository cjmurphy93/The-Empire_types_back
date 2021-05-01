var randomWords = require("random-words");

export default class Enemy {
  constructor(canvas, ctx, speed, shipPos) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.word = randomWords();
    this.speed = speed;
    this.rendered = true;
    this.shipImg = new Image();
    this.shipImg.src = "./src/assets/tie_fighter.png";
    this.sprites = new Image();
    this.sprites.src = "./src/assets/spritesheet.png";
    this.explosion = new Image();
    this.explosion.src = "./src/assets/enemy_sheet.png";
    this.shipPos = shipPos;
    this.dz = 0.1;
    this.dx = this.shipPos[0] / 256;
    this.attacking = false;
    this.atf = 0;
    this.exploding = false;
    this.explodingFrames = [479, 511, 545, 583, 626, 667, 402, 440];
    this.exf = 0;
    this.flyingNoise = new Audio("./src/assets/soundFX/tie_fighter_noise.wav");
    this.flyingNoiseOn = false;
    this.flyingNoise.volume = 0.15;
    this.laserNoise = new Audio("./src/assets/soundFX/blaster.wav");
    this.laserNoiseOn = false;

    this.draw = this.draw.bind(this);
    this.attack = this.attack.bind(this);
  }

  draw() {
    if (!this.exploding) {
      this.ctx.drawImage(
        this.shipImg,
        this.dx * this.canvas.width,
        (this.shipPos[1] / 222) * this.canvas.height,
        this.dz * (this.canvas.width * (40 / 256)),
        this.dz * (this.canvas.height * (40 / 222))
      );
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.font = "20px Red Rose";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        this.word,
        this.dx * this.canvas.width +
          this.dz * ((this.canvas.width * 20) / 256),
        (this.shipPos[1] / 222) * this.canvas.height
      );
      if (!this.flyingNoiseOn) {
        this.flyingNoiseOn = true;
        this.flyingNoise.play();
      }
      this.attack();
    } else {
      this.ctx.drawImage(
        this.explosion,
        this.explodingFrames[this.exf],
        136,
        32,
        48,
        this.dx * this.canvas.width,
        (this.shipPos[1] / 222) * this.canvas.height,
        this.dz * (this.canvas.width * (40 / 256)),
        this.dz * (this.canvas.height * (40 / 222))
      );
    }
  }

  animate() {
    if (this.rendered) {
      if (this.dz < 1 && !this.exploding) {
        this.dz += this.speed;
        this.dx -= 0.001;
      }
      if (this.dz > 1) {
        this.flyingNoise.pause();
      }
      this.draw();
      if (this.exploding) this.exf += 1;
      if (this.exf >= 7) this.rendered = false;
    }
  }

  attack() {
    if (this.dz >= 1) {
      if (this.attacking) {
        if (!this.laserNoiseOn) {
          this.laserNoiseOn = true;
          this.laserNoise.play();
        }
        this.ctx.drawImage(
          this.sprites,
          771,
          450,
          245,
          68,
          // (( this.dx * this.canvas.width) - (this.dz *(this.canvas.width * 122/256))),
          ((this.shipPos[0] - 125) / 256) * this.canvas.width,
          ((this.shipPos[1] + 25) / 222) * this.canvas.height,
          (this.canvas.width * 245) / 256,
          this.canvas.height * ((222 - (this.shipPos[1] + 25)) / 222)
        );
        this.atf += 1;
        if (this.atf > 20) {
          this.attacking = false;
          this.atf = 0;
          // this.laserNoise.pause();
          this.laserNoiseOn = false;
        }
      }
    }
  }
}

export default class Player {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pImg = new Image();
    this.pImg.src = "./src/assets/spritesheet.png";
    this.navScreenFrames = [260, 316];
    this.nSF = 0;
    this.health = 10;
    this.scoreFrames = [337, 328, 270, 277, 285, 292, 299, 306, 313, 320];
    this.score = 0;
  }

  animate() {
    this.ctx.drawImage(
      this.pImg,
      2,
      450,
      256,
      163,
      0,
      (59 / 222) * this.canvas.height,
      this.canvas.width,
      (163 / 222) * this.canvas.height
    );
    this.ctx.drawImage(
      this.pImg,
      this.navScreenFrames[this.nSF],
      580,
      54,
      33,
      (101 / 256) * this.canvas.width,
      (176 / 222) * this.canvas.height,
      (54 / 256) * this.canvas.width,
      (33 / 222) * this.canvas.height
    );
    this.nSF += 1;
    if (this.nSF > 1) this.nSF = 0;

    if (this.health <= 9)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (161 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 8)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (153 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 7)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (145 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 6)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (137 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 5)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (129 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 4)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (121 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 3)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (113 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 2)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (105 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 1)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (97 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );
    if (this.health <= 0)
      this.ctx.drawImage(
        this.pImg,
        268,
        561,
        6,
        3,
        (89 / 256) * this.canvas.width,
        (153 / 222) * this.canvas.height,
        (6 / 256) * this.canvas.width,
        (3 / 222) * this.canvas.height
      );

    let tens = Math.floor(this.score / 10);
    let ones = this.score % 10;

    this.ctx.drawImage(
      this.pImg,
      this.scoreFrames[tens],
      571,
      6,
      7,
      (169 / 256) * this.canvas.width,
      (200 / 222) * this.canvas.height,
      (6 / 256) * this.canvas.width,
      (7 / 222) * this.canvas.height
    );
    this.ctx.drawImage(
      this.pImg,
      this.scoreFrames[ones],
      571,
      6,
      7,
      (177 / 256) * this.canvas.width,
      (200 / 222) * this.canvas.height,
      (6 / 256) * this.canvas.width,
      (7 / 222) * this.canvas.height
    );
  }
}

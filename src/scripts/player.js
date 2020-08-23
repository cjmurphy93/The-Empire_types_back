export default class Player {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pImg = new Image();
    this.pImg.src = "./src/assets/spritesheet.png";

  }


  animate() {
        this.ctx.drawImage(this.pImg, 3, 450, 254, 162, 0, ((59 / 222) * this.canvas.height), this.canvas.width, ((163 / 222) * this.canvas.height));
  }
}

export default class Player {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pImg = new Image();
    this.pImg.src = "./src/assets/spritesheet.png";
    this.navScreenFrames = [260, 316];
    this.nSF = 0;
  }


  animate() {
        this.ctx.drawImage(this.pImg, 3, 450, 254, 162, 0, ((59 / 222) * this.canvas.height), this.canvas.width, ((163 / 222) * this.canvas.height));
        this.ctx.drawImage(this.pImg, this.navScreenFrames[this.nSF], 580, 54, 33, ((100 / 254) * this.canvas.width), ((177 / 222) * this.canvas.height), ((54 / 254) * this.canvas.width), ((33 / 222) * this.canvas.height));
        this.nSF += 1;
        if (this.nSF > 1) this.nSF = 0;
  }
}

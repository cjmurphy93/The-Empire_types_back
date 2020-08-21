export default class Background {
    constructor(canvas, ctx, speed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.speed = speed;
        this.backgroundImage = new Image();
        this.backgroundImage.src = './src/assets/space_bg.png';
        this.y = 0;
    };

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.y += this.speed;
        this.ctx.drawImage(
          this.backgroundImage,
          0,
          this.y,
          this.canvas.width,
          this.canvas.height
        );
        this.ctx.drawImage(
          this.backgroundImage,
          0,
          this.y - this.canvas.height,
          this.canvas.width,
          this.canvas.height
        );
        if (this.y === this.canvas.height) this.y = 0;
    };
}
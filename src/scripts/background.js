export default class Background {
    constructor(canvas, ctx, speed) {
        this.canvas = canvas;
        this.ctx = ctx;
        // this.speed = speed;
        this.bImage = new Image();
        this.bImage.src = './src/assets/spritesheet.png';
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.bTFrames = [2, 260, 518, 776, 1034];
        this.bBFrames = [2, 260, 518, 776, 1034, 1292];
        this.tFrame = 0;
        this.bFrame = 0;
        // this.y = 0;
    };

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.bImage, this.bBFrames[this.bFrame], 226, 256, 222, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bImage, this.bTFrames[this.tFrame], 2, 256, 222, 0, 0, this.canvas.width, this.canvas.height);
        this.bFrame += 1;
        this.tFrame += 1;
        if (this.bFrame > 5) this.bFrame = 0;
        if (this.tFrame > 4) this.tFrame = 0;
        // this.y += this.speed;
        // this.ctx.drawImage(
        //   this.backgroundImage,
        //   0,
        //   this.y,
        //   this.canvas.width,
        //   this.canvas.height
        // );
        // this.ctx.drawImage(
        //   this.backgroundImage,
        //   0,
        //   this.y - this.canvas.height,
        //   this.canvas.width,
        //   this.canvas.height
        // );
        // if (this.y === this.canvas.height) this.y = 0;

    };
}
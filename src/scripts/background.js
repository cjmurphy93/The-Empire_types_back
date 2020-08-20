export default class Background {
    constructor(ctx, speed) {
        this.ctx = ctx;
        this.speed = speed;
        this.backgroundImage = new Image();
        this.backgroundImage.src = './src/assets/space_bg.png';
        this.y = 0;
    };

    animate() {
        this.ctx.clearRect(0, 0, 1000, 800);
        this.y -= this.speed;
        this.ctx.drawImage(this.backgroundImage, 0, this.y)
        this.ctx.drawImage(this.backgroundImage, 0, this.y + 1200);
        if (this.y === -1200) this.y = 0;
    };
}
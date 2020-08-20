var randomWords = require('random-words');




export default class Enemy {
    constructor(canvas, ctx, speed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.word = randomWords();
        this.speed= speed;
        this.rendered = true;
        this.shipImg = new Image();
        this.shipImg.src = "./src/assets/tie_fighter.png";
        this.shipPos = -100;
        this.dx = 450
        this.speed = speed;
    };

    draw() {
        this.ctx.drawImage(this.shipImg, this.dx, this.shipPos, 100, 100);

    };

    animate(){
        this.shipPos += this.speed;
        if (this.shipPos === this.canvas.height) this.shipPos = -100;
        this.draw();
    }
}

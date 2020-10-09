var randomWords = require('random-words');

export default class Enemy {
    constructor(canvas, ctx, speed, shipPos) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.word = randomWords();
        this.speed= speed;
        this.rendered = true;
        this.shipImg = new Image();
        this.shipImg.src = "./src/assets/tie_fighter.png";
        this.shipPos = shipPos;
        this.dz = 0.1;
        this.dx = (this.shipPos[0] / 256);
    };

    draw() {
        debugger
        this.ctx.drawImage(this.shipImg, ( this.dx * this.canvas.width), ((this.shipPos[1] / 222) * this.canvas.height), (this.dz * (this.canvas.width * (60 / 256))), (this.dz * (this.canvas.height * (60 / 222))));
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.font = '20px Red Rose';
        const wordPos = (100 - (this.word.length * 20)) / 2;
        this.ctx.fillText(this.word, (wordPos + ((this.shipPos[0] / 256) * this.canvas.width)), ((this.shipPos[1] / 222) * this.canvas.height));
    };

    animate(){
        if (this.rendered) {
        if (this.dz < 1) {
            this.dz += this.speed;
            this.dx -= .001;
        }
        this.draw();
        }
    }
}

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
        this.sprites = new Image();
        this.sprites.src = './src/assets/spritesheet.png';
        this.shipPos = shipPos;
        this.dz = 0.1;
        this.dx = (this.shipPos[0] / 256);
        this.attacking = false;
        this.atf = 0;

        this.draw = this.draw.bind(this);
        this.attack = this.attack.bind(this);
    };

    draw() {
        
        this.ctx.drawImage(this.shipImg, ( this.dx * this.canvas.width), ((this.shipPos[1] / 222) * this.canvas.height), (this.dz * (this.canvas.width * (40 / 256))), (this.dz * (this.canvas.height * (40 / 222))));
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.font = '20px Red Rose';
        // const wordPos = (100 - (this.word.length * 20)) / 2;
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.word, (( this.dx * this.canvas.width) + (this.dz *(this.canvas.width * 20/256))), ((this.shipPos[1] / 222) * this.canvas.height));
        this.attack();
        // debugger
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

    attack() {
        if (this.dz >= 1) {
            if (this.attacking) {
                this.ctx.drawImage(this.sprites, 771, 450, 245, 68, 
                    // (( this.dx * this.canvas.width) - (this.dz *(this.canvas.width * 122/256))), 
                    ( ((this.shipPos[0] - 125) / 256)* this.canvas.width), 
                    ((((this.shipPos[1] + 25) / 222) * this.canvas.height)), 
                    (this.canvas.width * 245/256), 
                    (this.canvas.height * ((222-(this.shipPos[1] + 25))/ 222)));
                    // debugger
                    this.atf += 1;
                    if (this.atf > 20) {
                        this.attacking = false;
                        this.atf = 0
                    }
            }
        }    
    }
}

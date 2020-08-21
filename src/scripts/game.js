import Enemy from './enemy';
import Background from './background';

export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.background = new Background(canvas, ctx, 1.0);
        this.ship = new Enemy(canvas, ctx, 2.0);
        this.word = this.ship.word;
        this.animate = this.animate.bind(this);
    }

    animate() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.background.animate();
        this.ship.animate();
        requestAnimationFrame(this.animate);
    }

    start() {
        this.animate();
    }

    checkWord(word) {
        if (this.word === word) {
            this.ship.rendered = false
        }
    }


}
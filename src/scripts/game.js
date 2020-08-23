import Enemy from './enemy';
import Background from './background';
import Player from './player';

export default class Game {
    constructor(canvas, ctx, bgCtx, pCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.bgCtx = bgCtx;
        this.pCtx = pCtx;
        this.background = new Background(canvas, bgCtx, 1.0);
        this.ship = new Enemy(canvas, ctx, 2.0);
        this.playerShip = new Player(canvas, pCtx);
        this.word = this.ship.word;
        this.animate = this.animate.bind(this);
        this.animateBackground = this.animateBackground.bind(this);
    }

    animateBackground() {
        this.bgCtx.canvas.width = window.innerWidth;
        this.bgCtx.canvas.height = window.innerHeight;
        this.pCtx.canvas.width = window.innerWidth;
        this.pCtx.canvas.height = window.innerHeight;
        this.background.animate();
        this.playerShip.animate();

    }

    animate() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.ship.animate();
        requestAnimationFrame(this.animate);
        
    }

    start() {
        setInterval(this.animateBackground, 125);
        this.animate();
    }

    checkWord(word) {
        if (this.word === word) {
            this.ship.rendered = false
        }
    }


}
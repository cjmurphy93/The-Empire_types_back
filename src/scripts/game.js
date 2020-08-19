import Enemy from './enemy';
import Background from './background';

export default class Game {
    constructor(canvas, ctx, bgCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.background = new Background(ctx, 1.0);

        this.animate = this.animate.bind(this);
    }

    animate() {
        this.background.animate();
        requestAnimationFrame(this.animate);
    }

    start() {
        this.animate();
    }


}
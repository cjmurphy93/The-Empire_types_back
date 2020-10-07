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
        this.focused = true;
        this.startGame = false;
        this.ships = [];
        this.player = new Player(canvas, pCtx);
        this.words = [];
        this.startPositions = [];
        this.usedStartPos = [];
        this.animate = this.animate.bind(this);
        this.animateBackground = this.animateBackground.bind(this);
        this.start = this.start.bind(this);
        this.createEnemy = this.createEnemy.bind(this);
        this.generateEnemies = this.generateEnemies.bind(this);
    }

    animateBackground() {
        this.bgCtx.canvas.width = window.innerWidth;
        this.bgCtx.canvas.height = window.innerHeight;
        this.pCtx.canvas.width = window.innerWidth;
        this.pCtx.canvas.height = window.innerHeight;
        this.background.animate();
        this.player.animate();

    }

    animate() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        for (let i = 0; i < this.ships.length; i++){
            const ship = this.ships[i];
            if (ship.rendered){
                ship.animate();
            } else {
                this.ships.splice(i, 1);
                this.words.splice(i, 1);
            }
        }
        requestAnimationFrame(this.animate);
        
    }

    start() {
        if (!this.startGame) {
            this.generateEnemies();

        this.startGame = true;
        const playerWord = document.getElementById('player-word');
        playerWord.autofocus = true;
        }
        
        window.onblur = () => this.focused = false;
        window.onfocus = () => {
            this.focused = true;
            this.generateEnemies();

        }

        const playerWord = document.getElementById('player-word');
        playerWord.autofocus = true;
        this.canvas.addEventListener('click', ()=> playerWord.focus());

        setInterval(this.animateBackground, 125);
        this.animate();
    }

    createEnemy(canvas, ctx) {
        let enemy = new Enemy(canvas, ctx, 2.0);
        this.ships.push(enemy);
        this.words.push(enemy.word);
    }

    generateEnemies() {
        let delay = Math.floor(Math.random() * 5000);
        if (this.focused) {
            setTimeout(()=>{
                    this.createEnemy(this.canvas, this.ctx);
                    this.generateEnemies();
            }, delay - .2);
        }
    }

    checkWord(word) {
        let i = this.words.indexOf(word);
        if (i != -1) {
            this.ships[i].rendered = false
        }
    }


}
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
        this.startPositions = [[96, 80], [172, 70], [63, 30], [120, 25], [197, 20]];
        this.usedStartPos = [];
        this.animate = this.animate.bind(this);
        this.animateBackground = this.animateBackground.bind(this);
        this.start = this.start.bind(this);
        this.createEnemy = this.createEnemy.bind(this);
        this.generateEnemies = this.generateEnemies.bind(this);
        this.generateAttacks = this.generateAttacks.bind(this);
        this.enemyAttack = this.enemyAttack.bind(this);
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
                // if (ship.dz >= 1) {
                //     this.player.health -= 1;
                //     ship.attacking = true;
                //     // debugger
                // }
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
            this.generateAttacks();

        this.startGame = true;
        const playerWord = document.getElementById('player-word');
        playerWord.autofocus = true;
        }
        
        window.onblur = () => this.focused = false;
        window.onfocus = () => {
            this.focused = true;
            this.generateEnemies();
            this.generateAttacks();

        }

        const playerWord = document.getElementById('player-word');
        playerWord.autofocus = true;
        this.canvas.addEventListener('click', ()=> playerWord.focus());
        document.getElementById('bg-canvas').addEventListener('click', ()=> playerWord.focus());
        document.getElementById('player-screen').addEventListener('click', ()=> playerWord.focus());


        setInterval(this.animateBackground, 125);
        this.animate();
    }

    createEnemy(canvas, ctx) {
        if (this.startPositions.length) {
            let enemy = new Enemy(canvas, ctx, .01, this.startPositions[0]);
            this.ships.push(enemy);
            this.words.push(enemy.word);
            let x = this.startPositions.shift();
            this.usedStartPos.push(x);
        } 
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

    generateAttacks () {
                let delay = Math.floor(Math.random() * 5000);
        if (this.focused) {
            setTimeout(()=>{
                    if (this.ships.length) this.enemyAttack();
                    this.generateAttacks();
            }, delay - .2);
        }
    }

    enemyAttack() {
        let ship = this.ships[Math.floor(Math.random() * this.ships.length)];
        if (!ship.attacking && ship.dz >= 1) {
            ship.attacking = true;
            this.player.health -=1;
        }
    }

    checkWord(word) {
        let i = this.words.indexOf(word);
        if (i != -1) {
            this.startPositions.push(this.ships[i].shipPos);
            this.ships[i].rendered = false;
            this.player.score += 1;
        }
    }


}
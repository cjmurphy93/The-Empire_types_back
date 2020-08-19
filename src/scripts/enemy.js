var randomWords = require('random-words');


var shipImg = new Image();
shipImg.src = './src/assets/tie_fighter.png';

export default class Enemy {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.word = randomWords();
    }
}

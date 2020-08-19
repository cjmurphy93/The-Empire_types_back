var randomWords = require('random-words');
import tieFighter from '../assets/tie_fighter.png';

var shipImg = new Image;
shipImg.src = tieFighter;

export default class Enemy {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.word = randomWords();
    }
}
